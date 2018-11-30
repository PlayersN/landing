import React from 'react';
import Heading from "components/shared/Heading";
import ContentWrapper from "components/shared/ContentWrapper";
import Input from "components/shared/Input";
import Button from 'components/shared/Button';
import Slide from 'react-reveal/Slide';

import "stylesheets/components/SignupForm.css";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    const inputs = [{ 
        id: "full_name",
        name: "full_name",
        type:"text",
        placeholder: "Full Name",
        value: '',
        error: false,
      }, {
        id: "email",
        name: "email",
        type:"text",
        placeholder: "Email",
        value: '',
        error: false,
      },
    ];

    this.state = {
      inputs
    }
  }

  updateInput(input) {
    const { inputs } = this.state;
    const _inputs = [
      ...inputs,
      input,
    ];
    this.setState({
      _inputs,
    })
  }

  handleChange = ({ target: { id, value }}) => {
    const { inputs } = this.state;
    const input = inputs.filter(input => input.id === id)[0];
    input.value = value;

    if (input.error) {
      this.validateInput(input);
    }

    this.updateInput(input);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { inputs } = this.state;

    const missingValues = inputs.filter(input => input.value === '');
    if (missingValues.length) {
      missingValues.forEach(input => {
        input.error = true;
        this.updateInput(input);
      });
      return;
    }

    const payload = inputs.reduce((_inputs, input) => {
      _inputs[input.id] = input;
      return _inputs;
    }, {});
    console.log('Form is valid lets submit!');
    console.log(payload);
  }

  validateInput(input) {
    if (input.value !== '') {
      input.error = false;
      this.updateInput(input);
    }
  }

  render() {
    const { inputs } = this.state;

    return(
      <section className="signup-form" id="signup">
      <Slide bottom>
        <ContentWrapper className="signup-wrapper" >
          <Heading>Sign up for <strong>Early Access</strong> to receive your free gift.</Heading>
              <div className="sub-heading">
            <div className="logo typeface white"></div>
          </div>
            <div className="form-group">
              <a href="https://web.playersn.com" target="_blank" rel="noopener noreferrer"><Button className="button" type="submit">
                <span>Sign Up</span>
                <i className="icon-pen" />
              </Button></a>
            </div>
        </ContentWrapper>
        </Slide>
      </section>
    );
  }
}