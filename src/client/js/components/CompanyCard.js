import React from 'react';
import {Link} from 'react-router-dom'

export default class Company extends React.Component{
  render(){
    return <div className="company-listing">
      <h3 className="company-listing__name">
        {/* company name */}
        {this.props.title}
      </h3>
      <h5 className="company-listing__subtitle">Location</h5>
      <p className="company-listing__location">
        {/* company location */}
        {this.props.location}
      </p>
      <h5 className="company-listing__subtitle">Description</h5>
      <p className="company-listing__description">
        {/* company description */}
        {this.props.description}
      </p>
      <Link
        className="company-listing__view-company-btn"
        to={`/companies/${this.props.id}`}>
        View Company
      </Link>

    </div>
  }
}
