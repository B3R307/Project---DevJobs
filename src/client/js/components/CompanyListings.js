import React from 'react';
import request from 'superagent'

import {Link} from 'react-router-dom'
import CompanyCard from './CompanyCard.js'


export default class CompanyListings  extends React.Component {


  constructor(...args){
    super(...args)

    this.state = {
      companiesApiData : []
    }
  }


componentWillMount(){
  request
    .get('/api/companies')
    .then((serverRes)=>{
      this.setState({
        companiesApiData: serverRes.body
      })
    })
}


  render(){
      const listingsData = this.state.companiesApiData

      return   <div className="page page--companies">
        <h2>Companies</h2>
        {/* render CompanyCard components here ... */}
        {
          listingsData.map( (listingObj)=>{
            return <CompanyCard
              {...listingObj}
              key={listingObj.id+listingObj.name}
              />
          })
        }
      </div>
  }
}
