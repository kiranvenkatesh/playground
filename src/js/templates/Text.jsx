"use strict";
import React, {Component} from "react";
// import {subschema, decorators} from "subschema";
import {ValueManager, types} from "subschema";
import autobind from "autobind";
import $ from "jquery";

const {Text} = types;

export default class TextInput extends Component {
  displayName: "TextInput";
  
  static propTypes = Text.propTypes;

  constructor( ...rest ) {
    super( ...rest );
    this.state = {
      value: "",
      vm: new ValueManager()
    }
  }

  componentDidMount() {
    var me = this,
      $input = $( me.refs.customText ).find( "input" );

    $input.attr( "autoComplete", "off" );
  }

  @autobind
  clearText( e ) {
    var me = this;      

    this.setState( {
      value: ""
    } );

    e.target.previousSibling.value = "";

    let _e = {
      target: e.target.previousSibling
    };

    me.onChange( _e );
  }

  @autobind
  onChange( e ) {
    var val = e.target.value;

    this.setState( {
      value: val
    } );

    this.props.onChange( e );
  }

  render() {
    var me = this;
    //<Text ref="customInput" name={props.name} id={props.name} type="text" value={me.state.value} vm={me.state.vm} onChange={me.onChange}/>
    var {...props} = this.props;    
    return(
      <div className="custom-txt" ref="customText">
        <Text ref="customInput" value={me.state.value} onChange={me.onChange} {...props}/>
        <span onTouchTap={me.clearText}>Clear</span>
      </div>);
  }
}