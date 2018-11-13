import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

class FormUser extends Component {
  state = {
    step: 1
  };

  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  prevStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  };

  handleChange = event => {
    return function(e) {
      this.setState({
        event: e.target.value
      });
    };
  };

  render() {
    switch (this.state.step) {
      case 1:
        return <FormUserDetails />;
      case 2:
        return <div>1</div>;
      case 3:
        return <div>1</div>;
      case 4:
        return <div>1</div>;
      default:
        return null;
    }
  }
}

export default FormUser;
