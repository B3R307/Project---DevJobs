const express = require('express')
const ejs = require('ejs')



const knex = require('knex')
const { Model } = require('objection')

const dbConfigObj = require('./knexfile.js')


const pageRouter = require(`./src/routes/pageRouter.js`)
const apiRouter = require(`./src/routes/apiRouter.js`)


const app = express()

const appDb = knex(dbConfigObj.development)
Model.knex(appDb)

app.locals.db = appDb


// appDb.select('*').from('companies')
//   .then((records)=>{
//     console.log(records)
//   })

const PORT = 3000

app.use( express.static( `${__dirname}/public`) )

app.engine( 'ejs', ejs.renderFile )
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)

app.use('/', pageRouter)
app.use('/api', apiRouter)

app.use((req, res )=>{
  res.send('<h3> 404 BIG ERROR - PAGE NO EXIST </h3>')
})


app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
