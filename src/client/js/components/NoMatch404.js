import React from 'react';


export default class NoMatch404 extends React.Component {
  render(){
    return   <div className="header--404">
        <h2 className="header--404__title">Page Not Found</h2>
        <a className="header--404__btn" href="/">Go Home</a>
      </div>
  }
}
