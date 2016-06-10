"use strict";
import React from "react";
import {Form, ValueManager} from "subschema";
import autobind from "autobind";

// import CustomText from "../templates/Text.jsx";

// const loader = Subschema.loaderFactory( [
//   Subschema.DefaultLoader
// ] );

class Example6 extends React.Component {  
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
        "phoneOrEmail": {
          "type": "Radio",
          "title": false,
          "options": [
            {
              "label": "Phone",
              "val": "phone"
            },
            {
              "label": "Email",
              "val": "email"
            }
          ]
        },
        "phone": {
          "type": "Text",
          "validators": [
            {
              "type": "regexp",
              "regexp": "/^[0-9]{3}?$/",
              "message": "Enter a valid phone number"
            }
          ]
        },
        "canWePhone": "Checkbox",
        "showAddressModal": {
          "type": "Checkbox",
          "title": "Edit Address",
          "help": "Click the checkbox to see the modal"
        },
        "email": {
          "type": "Text",
          "validators": [
            "required",
            "email"
          ]
        },
        "thankYou": {
          "type": "Object",
          "conditional": {
            "listen": "showAddressModal",
            "operator": "truthy",
            "dismiss": "showAddressModal"
          },
          "template": "ModalTemplate",
          "title": "Thank You for confirming!!!"
        }
      },
      "fieldsets": [
        {
          "legend": "Would you prefer us contact you via?",
          "fields": ["phoneOrEmail", "thankYou"]
        },
        {
          "buttons": [
            "Call Me"
          ],
          "fields": [
            "phone",
            "canWePhone"
          ],
          "conditional": {
            "listen": "phoneOrEmail",
            "operator": "==",
            "value": "phone",
            "transition": {
              "transition": "rollUp",
              "on": [
                "appear",
                "enter",
                "leave"
              ]
            }
          }
        },
        {
          "buttons": [
            "Email Me"
          ],
          "fields": [
            "email",
            "showAddressModal"
          ],
          "conditional": {
            "listen": "phoneOrEmail",
            "operator": "==",
            "value": "email",
            "transition": "rollUp"
          }
        }
      ]
    };

    // loader.addType( 'Text', CustomText );

    return ( <div>
        <a href="#">Back</a>
        <h1>Simple Form with Validation - Listeners</h1>
        <Form schema={schema} onButtonClick={me.onButtonClick}/>
      </div> );
  }
}

export default Example6;