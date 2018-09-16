import React from 'react';
import {Link} from 'react-router-dom'

export default class Job extends React.Component{
  render(){
    return <div className="job-listing">
      <h3 className="job-listing__title">
        {/* job -title */}
        {this.props.title}
      </h3>
      <p className="job-listing__location">
        {/* job - location */} | {/* company - name */}
        {this.props.location} | {this.props.company.name}
      </p>
      <hr className="job-listing__divider"/>
      <Link className="job_listing__view-job-btn"
        to={`/jobs/${this.props.id}`}>View</Link>
    </div>
  }
}
