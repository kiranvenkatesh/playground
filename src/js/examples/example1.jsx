"use strict";
import React from "react";
import {Form} from "subschema";

class Example1 extends React.Component {
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
        },
        "address": {
          "type": "Text"
        }
      },
      "fieldsets": [
        {
          "legend": "Name",
          "fields": "title, name, age, address"          
        }
      ]
    };

    return ( <div>
        <a href="#">Back</a>
        <h1>Subschema Simple Form</h1>
        <Form schema={schema}/>
      </div> );
  }
}

export default Example1;