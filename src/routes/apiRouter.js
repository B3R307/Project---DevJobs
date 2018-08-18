const Router = require(`express`).Router;
const Company = require('../models/Company.js')
const Job = require('../models/Job.js')

const apiRouter = Router()


apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/jobs' : 'Show jobs',
    '/api/companies' : 'Show companies'
  })
})

apiRouter.get('/jobs', (req, res)=>{
    Job.query()
    .eager('theCompany')
    .then((recordsWhitCompanies)=>{
      res.status(200).json(recordsWhitCompanies)
    })
})


apiRouter.get('/jobs/:_id', (req, res)=>{
   const db =req.app.locals.db

   const idInRoute = req.params._id
   console.log(idInRoute);

   db.select('*').from('jobs')
   .where('id', '=', idInRoute)
   .then((records)=>{
      res.json(records)
   })

})

  // apiRouter.get('/companies', (req, res)=>{
  //     const db =req.app.locals.db
  //       db.select('*').from('companies')
  //       .then((dbRecordsReturned)=>{
  //         res.status(200).json(dbRecordsReturned)
  //       })
  // })


  apiRouter.get('/companies', (req, res)=>{
    console.log("comapnay query");
    Company.query()
      .eager('companyJobs')
      .then((recordsWithJobs)=>{
        res.status(200).json(recordsWithJobs)
      })

  })

  apiRouter.get('/companies/:_id', (req, res)=>{
     const db =req.app.locals.db

     const idInRoute = req.params._id
     console.log(idInRoute);

     db.select('*').from('companies')
     .where('id', '=', idInRoute)
     .then((records)=>{
        res.json(records)
     })

  })

module.exports = apiRouter
