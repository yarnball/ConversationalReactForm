import React, { Component } from "react";
import Typist from "react-typist";

class CForm extends React.Component {
  cf = null;
  state = { answer: "some value!" };
  componentDidMount() {
    // customize your questions here
    this.refs.q1.setAttribute(
      "cf-questions",
      "Hi, I'm a smart form. How are you"
    );
    this.refs.q2.setAttribute("cf-questions", "Tell me more about you.");
    this.cf = window.cf.ConversationalForm.startTheConversation({
      formEl: this.refs.form,
      context: document.getElementById("cf-context"), // <-- bind this to an element instead of html body
      flowStepCallback: (dto, success, error) => {
        success();
      },
      submitCallback: () => {
        console.log("Form submitted...");
      }
    });
  }
  // componentDidUpdate(props){
  //   console.log('comp updated!', props)
  //   this.refs.onlineBook.setAttribute('value', {this.state.answer})
  // }

  render() {
    return (
      <div>
                      <span className="super">
          
            {" "}

            Hi
          </span>
      <div id="cf-context">
        <form id="form" className="form" ref="form">
          <input
            type="text"
            ref="q1"
            placeholder="Name"
            defaultValue={this.props.q1}
          />

          <select ref="q2" type="radio" id="links">
            <option value="request_1">ABC</option>
            <option value="request_2">XYZ</option>
          </select>
        </form>
      </div>
      </div>
    );
  }
}

export default CForm;
