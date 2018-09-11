import React from 'react';


export default class LoginForm  extends React.Component {


  render(){
    return   <div className="form form--login">
        <form>
          <h3>Login</h3>
          <input className="form__field" type="text" name="email" placeholder="Email"/>
          <input className="form__field" type="password" name="password" placeholder="Password"/>
          <input className="form__login-btn"type="submit" value="login"/>
        </form>
      </div>
  }
}
