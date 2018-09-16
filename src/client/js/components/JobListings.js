import React from 'react';
import request from 'superagent'

import {Link} from 'react-router-dom'
import JobCard from './JobCard.js'

export default class JobListings extends React.Component {


    constructor(...args){
      super(...args)

      this.state = {
        jobsApiData : []
      }
    }

  componentWillMount(){
    request
    .get('api/jobs')
    .then((serverRes)=>{
      this.setState({
        jobsApiData : serverRes.body
      })
    })
  }


  render(){
      const listingsData = this.state.jobsApiData

      return   <div className="page page--jobslist">
        <h2>Job Listings</h2>
        {/* render JobCard components here ... */}
        {
          listingsData.map( (listingObj)=>{
            return <JobCard
            {...listingObj}
            key={listingObj.id+listingObj.title}
            />
          })
        }
      </div>
  }
}
