import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import CompanyListings from './components/CompanyListings.js';
import JobListings from './components/JobListings.js';
import LoginForm from './components/LoginForm.js';
import RegisterForm from './components/RegisterForm';
import Nav from './components/Nav.js';
import Dashboard from './components/Dashboard.js';
import NoMatch404 from './components/NoMatch404.js';


class App extends React.Component {
  render (){

    return <div>
      <Nav />
      <Switch>
        <Route path='/companies' component={CompanyListings}/>
        <Route path='/jobs' component={JobListings}/>
        <Route path='/login' component={LoginForm}/>
        <Route path='/register' component={RegisterForm}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route component={NoMatch404}/>
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
