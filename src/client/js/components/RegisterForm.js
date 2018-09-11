import React from 'react';


export default class RegisterForm  extends React.Component {


  render(){
    return   <div className="form form--login">
        <form >
          <h2>Register</h2>
          <input className="form__field" type="text" name="email" placeholder="Email"/>
          <input className="form__field" type="password" name="password" placeholder="Password"/>
          <input className="form__field" type="password" name="confirmpassword" placeholder="Confirm Password"/>
          <input className="form__register-btn"type="submit" value="register"/>
        </form>
      </div>
  }
}
