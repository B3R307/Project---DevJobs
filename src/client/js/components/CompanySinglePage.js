import React from 'react';
import {Link} from 'react-router-dom'
/* import superagent*/

export default class CompanySinglePage extends React.Component{


  render(){

    return <div className="company-single">
      <div className="company-single__company-col">
        <img
          className="company-single__image"
          src={/* company image_link */'https://flathash.com/cool' }

        />
        <hr/>
        <h2 className="company-single__name">
          { /* company name */ 'Company X'}
        </h2>
        <p className="company-single__location">
          {/* company location*/ 'Guanajuato' }
        </p>
        <hr/>
        <p className="company-single__description">
          {/* company description */ 'Lorem ipsum dolor...'}
        </p>
      </div>
      <div className="company-single__job-listings-col">
        <h3>Latest Jobs</h3>
        {/*
          map over .jobs from company object to generate
          an array of JSX of jobs that belong to the company
          -- demo of output below
        */}
        {[
          <div className="company-single__job-listing">
             <h4 className="company-single__job-listing__title">
                {/*Job Title*/}Job Example
             </h4>
             <p className="company-single__job-listing__moreinfo">
                {/*Job Location*/}Ciudad de Mexico
                | {/*Job Salary*/} 37K
             </p>
             <Link
               className="company-single__job-listing__link"
               /* job's id (dynamic value in ${}) */
               to=`/jobs/${4}` >
                More Info
             </Link>
          </div>
      ]}


      </div>

    </div>
  }
}
