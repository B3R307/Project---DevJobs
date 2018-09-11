import React from 'react';
import {Link, NavLink} from 'react-router-dom'

export default class Nav extends React.Component {

  render(){
    return  (
      <div className="navbar">
        <div>
          <a className="nav__link nav__link-home" href="/">
            &lt;
            <span style={{fontSize: '1rem', fontFamily: 'sans-serif', display: 'inline-block', verticalAlign: 'middle', margin: '.25rem'}}>HOME</span>
            &gt;
          </a>
        </div>
        {/* ----- YOUR WORK BELOW -----  */}
        <div>

        {/* [ Jobs ] button  */}
          <NavLink
            activeClassName="nav__link--selected"
            className="nav__link nav__link-register"
            to="/jobs">
              Jobs
          </NavLink>

          {/* [ Companies ] button  */}
          <NavLink
            activeClassName="nav__link--selected"
            className="nav__link nav__link-register"
            to="/companies">
              Companies
          </NavLink>

          {/* [ Dashboard ] button  */}
          <NavLink
            activeClassName="nav__link--selected"
            className="nav__link"
            to={`/dashboard`}
            key={'dashboardnav'}>
            Dashboard
            </NavLink>

            {/* [ Register ] button  */}
            <NavLink
              activeClassName="nav__link--selected"
              className="nav__link"
              to={`/register`}>
                Sign Up
            </NavLink>

            {/* [ Login ] button  */}
            <NavLink
              activeClassName="nav__link--selected"
              className="nav__link"
              to={`/login`}>
                Sign Up
            </NavLink>


          {/* [ Logout ] button  */}
          <span
              className="nav__link nav__link-logout"
              onClick = { ()=>{ /*write handler func here*/ } }
              >
                Logout
            </span>


        </div>
      </div>
    )
  }
}
