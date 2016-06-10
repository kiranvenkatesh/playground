"use strict";
import React from "react";
import {Form} from "subschema";

class Example2 extends React.Component {
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
          "type": "Text"
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
            },
            {
              "label": "Add New",
              "action": "submit",
              "buttonClass": "primary cautionary"
            }
          ]
        }
      ]
    };

    return ( <div>
        <a href="#">Back</a>
        <h1>Form with Submit</h1>
        <Form schema={schema}/>
      </div> );
  }
}

export default Example2;