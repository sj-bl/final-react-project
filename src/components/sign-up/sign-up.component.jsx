import React from "react";
import "./sign-up.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChange = async (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handlesubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (confirmPassword !== password) {
      return alert("password does not match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with your email</span>
        <form className="sign-up-form" onSubmit={this.handlesubmit}>
          <FormInput
            type="name"
            name="displayName"
            value={this.state.displayName}
            required
            onChange={this.handleChange}
            label="Name"
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            required
            onChange={this.handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
