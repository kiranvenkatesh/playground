"use strict";
import React from "react";
import {Form} from "subschema";

class Example3 extends React.Component {
  render() {

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
          "help": "This is the helper",
          "validators": [
            "required"
          ]
        },
        "age": {
          "type": "Number"
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

    return ( <div>
        <a href="#">Back</a>
        <h1>Simple Form Submit with Validation</h1>
        <Form schema={schema}/>
      </div> );
  }
}

export default Example3;