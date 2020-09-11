import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
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

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br2 ba white b--white-10 mv4 w-50-m w-25-l mw6 center shadow-5">
        <article className="pa4 white-80">
          <div action="sign-up_submit" method="get" accept-charset="utf-8">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="ph0 mh0 fw6 clip">Sign In</legend>
              <div className="f1">
                <p>Sign In</p>
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
                value="Sign In"
                onClick={this.onSubmitSignIn}
              />
            </div>
            <div>
              <p className="pointer" onClick={() => onRouteChange("register")}>
                Register
              </p>
            </div>
          </div>
        </article>
      </article>
    );
  }
}

export default SignIn;
