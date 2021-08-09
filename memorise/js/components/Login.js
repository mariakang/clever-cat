class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      form: "login",
      name: "",
      nameValid: false,
      email: "",
      emailValid: false,
      password: "",
      passwordValid: false,
      confirmPassword: "",
      passwordsMatch: false
    };
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggleForm(event) {
    let newForm = this.state.form == "login" ? "registration" : "login";
    this.setState({
      form: newForm,
    });
    console.log("form changed to " + this.state.form);
  }

  handleChangeName(event) {
    let newValue = event.target.value;
    let valid = /^[A-Za-z]+[A-Za-z\-\s]*$/.test(newValue);
    this.setState({
      name: newValue,
      nameValid: valid
    });
    console.log("name changed to " + this.state.name + " (valid: " + this.state.nameValid + ")");
  }

  handleChangeEmail(event) {
    let newValue = event.target.value;
    let valid = /^[A-Za-z0-9]+[A-Za-z0-9\-_@\.]*$/.test(newValue);
    this.setState({
      email: newValue,
      emailValid: valid
    });
    console.log("email changed to " + this.state.email + " (valid: " + this.state.emailValid + ")");
  }

  handleChangePassword(event) {
    let newValue = event.target.value;
    let valid = newValue.length >= 8 && /[0-9]+/.test(newValue) && /[A-Z]+/.test(newValue) && /[a-z]+/.test(newValue) && /[^0-9A-Za-z]+/.test(newValue);
    let match = newValue == this.state.confirmPassword;
    this.setState({
      password: newValue,
      passwordValid: valid,
      passwordsMatch: match
    });
    console.log("password changed to " + this.state.password + " (valid: " + this.state.passwordValid + ", match: " + this.state.passwordsMatch + ")");
  }

  handleConfirmPassword(event) {
    let newValue = event.target.value;
    let match = newValue == this.state.password;
    this.setState({
      confirmPassword: newValue,
      passwordsMatch: match
    });
    console.log("password confirmation changed to " + this.state.confirmPassword + "(match: " + this.state.passwordsMatch + ")");
  }

  handleSubmit(event) {
    let userPool = this.props.userPool;
    let email = this.state.email;
    let username = email.replace('@', '-at-');
    let password = this.state.password;
    if (this.state.form = "registration") {
      let emailData = {
        Name: 'email',
        Value: email
      };
      let nameData = {
        Name: 'name',
        Value: this.state.name
      };
      let emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
      let nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(nameData);

      userPool.signUp(username, password, [emailAttribute, nameAttribute], null,
        function signUpCallback(err, result) {
          if (!err) {
            console.log('Username is ' + result.user.getUsername());
          } else {
            alert(err);
          }
        }
      );
    }
    let authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
      Username: username,
      Password: password
    });

    let cognitoUser = new AmazonCognitoIdentity.CognitoUser({
      Username: username,
      Pool: userPool
    });
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function signinSuccess() {
        console.log('Successfully logged in');
        window.location.href = 'index.html';
      },
      onFailure: function signinError(err) {
        alert(err);
      }
    });
  }

  render() {
    let form = this.state.form;
    let activeButtonText = form == "login" ? "Log in" : "Register";
    let toggleButtonText = form == "login" ? "Register" : "Log in";
    let disabled = !this.state.emailValid || !this.state.passwordValid;
    if (form == "registration" && (!this.state.nameValid || !this.state.passwordsMatch)) {
      disabled = true;
    }
    let name = null;
    let confirmPassword = null;
    if (form == "registration") {
      name = (
        <div className="row">
          <label>Name: </label>
          <input type="text" name='name' placeholder="Name" onChange={this.handleChangeName} className={this.state.nameValid ? "valid" : "invalid"}></input>
        </div>
      );
      confirmPassword = (
        <div className="row">
          <label>Confirm password: </label>
          <input type="password" name='confirmPassword' placeholder='********' onChange={this.handleConfirmPassword} className={this.state.passwordsMatch ? "valid" : "invalid"}></input>
        </div>
      );
    }
    return (
      <div className="container">
        <h1>Memorise!</h1>
        <p className="blurb">Create lists of things you want to learn and test yourself!</p>
        <div class="form">
          {name}
          <div className="row">
            <label>Email: </label>
            <input type="text" name='email' placeholder='username@example.com' onChange={this.handleChangeEmail} className={this.state.emailValid ? "valid" : "invalid"}></input>
          </div>
          <div className="row">
            <label>Password: </label>
            <input type="password" name='password' placeholder='********' onChange={this.handleChangePassword} className={this.state.passwordValid ? "valid" : "invalid"}></input>
          </div>
          {confirmPassword}
          <button onClick={this.handleSubmit} disabled={disabled}>{activeButtonText}</button>
        </div>
        <div className="row">
          <div>Or</div>
          <button onClick={this.handleToggleForm}>{toggleButtonText}</button>
        </div>
      </div>
    );
  }
}