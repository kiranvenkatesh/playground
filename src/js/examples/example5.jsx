"use strict";
import React from "react";
import Subschema,{Form, ValueManager} from "subschema";
import autobind from "autobind";

import CustomText from "../templates/Text.jsx";

const loader = Subschema.loaderFactory( [
  Subschema.DefaultLoader
] );

class Example5 extends React.Component {  
  constructor( props ) {
    super( props );
    this.state = {
      vm: new ValueManager()
    }
  }

  @autobind
  handleSubmit() {
    let me = this;
    console.log( me.state.vm.getValue() );
  }

  @autobind
  onButtonClick( e, action) {
    if( action === "cancel" ) {
      window.location.href = "/#home";
    }
  }

  render() {
    var me = this;
    var schema = {
      "schema": {
        "title": {
          "type": "Select",
          "options": [
            "Mr",
            "Mrs",
            "Ms"
          ]
        },
        "name": {
          "type": "Text",
          "title": "NameLabel",
          "validators": [
            {
              "type": "required",
              "message": "Enter your name"
            }
          ]
        },
        "age": {
          "type": "Text",
          "validators": [
            "required",
            {
              "type": "regexp",
              "regexp": "/^[0-9]{3}?$/",
              "message": "Enter a valid number"
            }    
          ]
        }
      },
      "fieldsets": [
        {
          "legend": "Name",
          "fields": "title, name, age",
          "buttons": [
            {
              "label": "Cancel",
              "action": "cancel",
              "buttonClass": "default"
            },
            {
              "label": "Submit",
              "action": "submit",
              "buttonClass": "primary"
            }
          ]
        }
      ]
    };

    loader.addType( "Text", CustomText );

    return ( <div>
        <a href="#">Back</a>
        <h1>Simple Form with Validation - Custom Validation and Messages</h1>
        <Form schema={schema} loader={loader} onSubmit={me.handleSubmit} valueManager={ me.state.vm } onButtonClick={me.onButtonClick}/>
      </div> );
  }
}

export default Example5;