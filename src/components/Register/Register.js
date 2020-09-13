import React from "react";

class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://stormy-citadel-37811.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render(props) {
    return (
      <article className="br2 ba white b--white-10 mv4 w-50-m w-25-l mw6 center shadow-5">
        <article className="pa4 white-80">
          <div action="sign-up_submit" method="get" accept-charset="utf-8">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 fw6 clip">Register</legend>
              <div className="f1">
                <p>Register</p>
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="email-address">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="email"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="email-address">
                  Email address
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="mt3">
              <input
                className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6"
                type="submit"
                value="Register"
                onClick={this.onSubmitSignIn}
              />
            </div>
          </div>
        </article>
      </article>
    );
  }
}

export default Register;
