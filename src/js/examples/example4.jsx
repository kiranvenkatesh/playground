"use strict";
import React from "react";
import Subschema,{Form, ValueManager} from "subschema";
import autobind from "autobind";

import CustomText from "../templates/Text.jsx";

const loader = Subschema.loaderFactory( [
  Subschema.DefaultLoader
] );

class Example4 extends React.Component {  
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
          "validators": [
            "required"
          ]
        },
        "age": {
          "type": "Text",
          "validators": [
            "required"
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
        <h1>Simple Form Submit with Validation - Custom Templatess</h1>
        <Form schema={schema} loader={loader} onSubmit={me.handleSubmit} valueManager={ me.state.vm }/>
      </div> );
  }
}

export default Example4;