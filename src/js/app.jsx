import React from "react";
import cx from "classnames";

import Home from "./home/home.jsx";
import Example1 from "./examples/example1.jsx";
import Example2 from "./examples/example2.jsx";
import Example3 from "./examples/example3.jsx";
import Example4 from "./examples/example4.jsx";
import Example5 from "./examples/example5.jsx";
import Example6 from "./examples/example6.jsx";

import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
      super(props);
      this.displayName = "App";

      this.state = {
        route: props.route,
        show: true
      };
  }

  componentWillReceiveProps(nextProps) {
    var me = this,
      props = me.props;

    if( nextProps.route !== props.route ) {
      me.setState( {
        show: false
      } );
    }
  }

  componentDidUpdate() {
    var me = this,
      state = me.state;

    if( !state.show ) {
      setTimeout( function () {
        me.setState( {
          show: true,
          route: me.props.route
        } );
      }, 150 );   
    }
  }

  render() {
    var me = this,
      Child;

    switch( me.state.route ) {
      case "example1":
        Child = Example1;
        break;
      case "example2":
        Child = Example2;
        break;
      case "example3":
        Child = Example3;
        break;
      case "example4":
        Child = Example4;
        break;
      case "example5":
        Child = Example5;
        break;
      case "example6":
        Child = Example6;
        break;
      default:
        Child = Home;
        break;
    }

    var ctnClasses = cx( {
      "container": true,
      "show": me.state.show
    } );

    return (<div className={ctnClasses}>
      <Child/>
    </div>);
  }
}

export default App;