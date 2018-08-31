const Router = require('express').Router;
const Company = require('../models/Company.js')
const Job = require('../models/Job.js')

const apiRouter = Router()


const showRoute = (req, res)=>{
  res.json({
    '/api/jobs' : 'Show jobs',
    '/api/companies' : 'Show companies'
  })
}


const fetchManyCompanies = (req, res)=>{
    Company.query()
    .eager('job')
    .then((recordsWhitJobs)=>{
      res.status(200).json(recordsWhitJobs)
    })
    .catch((err)=>{
      console.log(err);
      var errorMessage = err.toString()
      res.status(500).send(errorMessage)
    })
}

apiRouter.get('/companies/:_id', (req, res)=>{
    const db =req.app.locals.db

    const idInRoute = req.params._id
     console.log(idInRoute);

    db.select('*').from('companies')
      .where('id', '=', idInRoute)
      .then((dbRecordsReturned)=>{
        res.json(dbRecordsReturned)
      })
})

const fetchOneCompany = (req, res)=>{
   const db =req.app.locals.db

 const idInRoute = req.params._id
   console.log(idInRoute);

   db.select('*').from('companies')
    .where('id', '=', idInRoute)
    .then((dbRecordsReturned)=>{
      res.json(dbRecordsReturned)
   })
}

const createOneCompany = function(req, res){
  console.log(req.body)
  Company.query()
    .insert(req.body)
    .then((newRecord)=>{
      res.status(200).json(newRecord)
    })
}

const editOneCompany = (req, res)=>{
  Company.query()
    .updateAndFetchById( req.params._id , req.body )
    .then((updatedRecord)=>{
      res.status(200).json(updatedRecord)
    })
}

const deleteOneCompany = (req, res)=>{
  Company.query()
   .deleteById(req.params._id)
   .then((deleteRecord)=>{
      res.status(200).json(deleteRecord)
   })
}

const fetchManyJobs = (req, res)=>{
    Job.query()
      .eager('company')
      .then((recordsWithComp)=>{
        res.status(200).json(recordsWithComp)
      })
      .catch((err)=>{
        var errorMessage = err.toString()
        res.status(500).send(errorMessage)
      })
    }

apiRouter.get('/jobs/:_id', (req, res)=>{
        const db =req.app.locals.db

        const idInRoute = req.params._id
         console.log(idInRoute);

          db.select('*').from('jobs')
          .where('id', '=', idInRoute)
          .then((dbRecordsReturned)=>{
            res.json(dbRecordsReturned)
          })
    })


const fetchOneJob = (req, res)=>{
    const db =req.app.locals.db
    const idInRoute = req.params._id
    console.log(idInRoute)

         db.select('*').from('jobs')
         .where('id', '=', idInRoute)
         .then((dbRecordsReturned)=>{
           res.json(dbRecordsReturned)
         })
}

const createOneJob = function(req, res){
  console.log(req.body)
     Job.query()
    .insert(req.body)
    .then((newRecord)=>{
       res.status(200).json(newRecord)
    })
}

const editOneJob = (req, res)=>{
    Job.query()
    .updateAndFetchById( req.params._id, req.body)
    .then((updatedRecord)=>{
    res.status(200).json(updatedRecord)
  })
}


const deleteOneJob = (req, res)=>{
  Job.query()
  .deleteById(req.params._id)
  .then((deleteRecord)=>{
    res.status(200).json(deleteRecord)
  })
}


apiRouter.get('/', showRoute)

apiRouter
  .get('/companies', fetchManyCompanies)
  .get('/companies/:_id', fetchOneCompany)
  .post('/companies', createOneCompany)
  .put('/companies/:_id', editOneCompany)
  .delete('/companies/:_id', deleteOneCompany)

  apiRouter
    .get('/jobs', fetchManyJobs)
    .get('/jobs/:_id', fetchOneJob)
    .post('/jobs', createOneJob)
    .put('/jobs/:_id', editOneJob)
    .delete('/jobs/:_id', deleteOneJob)


module.exports = apiRouter
