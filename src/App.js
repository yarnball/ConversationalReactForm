import React, { Component } from "react";
import Typist from "react-typist";
// import 'antd/lib/notification/style/css';
import { notification } from "antd";
import "./App.css";

const openNotification = type => {
  // console.log('notice')
  notification.open({
    message: "Market Insight",
    placement: "topRight",
    icon: (
      <img
        style={{ height: "35px" }}
        src="http://www.cloudselect.tech/wp-content/uploads/2017/11/CS_logo.png"
      />
    ),
    duration: 5,
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification."
  });
};

class App extends Component {
  render() {
    return (
      <div id="page-wrapper">
        <div id="wrapper">
          <section className="panel banner right">
            <div className="contentNoBorder span-4-75">
              <CForm />
            </div>
          </section>

          <section className="panel banner right">
            <div className="content color0 span-4-75">
              <h1 className="major">
                Hi, welcome to<br />
                <Typist delay={600}>
                  <span> Forms </span>
                </Typist>
              </h1>
              <p>
                This is the <b>Furture </b> of forms.{" "}
              </p>

              <ul className="actions">
                <li>
                  <a
                    href="#first"
                    className="button special color1 circle icon fa-angle-right"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <div className="copyright">
            &copy; 2017: <a href="#"> YC</a>.
          </div>
        </div>
      </div>
    );
  }
}

class CForm extends React.Component {
  cf = null;
  state = { question: "some value!" };
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
  //   this.refs.onlineBook.setAttribute('cf-questions', this.state.question + '? Great! Do you want to take online bookings?')
  // }

  render() {
    return (
      <span>
      <div id="cf-context">
        {/* <-- the cf form will be bound to this element */}
        <form id="form" className="form" ref="form">
          <input
            type="text"
            ref="q1"
            placeholder="Name"
            defaultValue={this.props.q1}
          />

          <select ref="q2" type="radio" id="links">
            {" "}
            {/* <-- using selection for options */}
            <option value="request_1">ABC</option>
            <option value="request_2">XYZ</option>
          </select>
        </form>
      </div>
      </span>
    );
  }
}

export default App;
