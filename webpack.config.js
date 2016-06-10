var path = require( 'path' );
var webpack = require( 'webpack' );
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssImport = require( 'postcss-import' );

const PATHS = {
  js: path.resolve( __dirname, 'src/js/main.js' ),
  buildjs: path.resolve( __dirname, 'build' )
};

module.exports = {
  entry: [
    PATHS.js
  ],
  resolve: {
    alias: {
      'react': path.resolve( __dirname, 'node_modules/react' ),
      'react-dom': path.resolve( __dirname, 'node_modules/react-dom' ),
      'redux': path.resolve( __dirname, 'node_modules/redux' ),
      'subschema': path.resolve( __dirname, 'node_modules/subschema/dist/subschema-noreact.js' ),
      'autobind': path.resolve( __dirname, 'node_modules/autobind-decorator' ),
      'custom': path.resolve( __dirname, 'src/js/custom/custom.js' )
    },
    modulesDirectories: [ "web_modules", "node_modules" ],
    extensions: ['', '.js', '.jsx']
  },
  output: [ 
    { path: PATHS.buildjs, filename: 'bundle.js' }
  ],
  module: {
    preLoaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: [/\.jsx$/, /\.js$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime', 'transform-decorators-legacy'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },      
      {
        test: /\.less$/, loader: "style!raw!postcss-loader!less"
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }      
    ]
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //       ENV: require(path.join(__dirname, './env/', env))
  //   })
  // ],
  jshint: {
    'esversion': 6
  },  
  postcss: function(webpack) {
    return {
      defaults: [postcssImport, precss, autoprefixer],
      cleaner: [
        postcssImport({
          addDependencyTo: webpack,
          path: [ path.resolve(__dirname, 'src') ]
        }),
        precss,
        autoprefixer
      ]
    }
  }
}