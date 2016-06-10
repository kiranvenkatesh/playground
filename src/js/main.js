import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

import '../css/main.less';

import App from './app.jsx';

// import custom from 'custom';
// custom.init();

var main = {
  init() {
    var win = window,
      $doc = $( document ),
      $main = $doc.find( '#main-app' );

    var route = win.location.hash.substr( 1 );

    ReactDom.render( <App route={route}/>, $main[0] );
  }
}

//launch the app
window.addEventListener( 'hashchange', main.init );
main.init();
