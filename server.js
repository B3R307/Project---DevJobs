const express = require('express')
const pageRouter = require(`./src/routes/pageRouter.js`)
const apiRouter = require(`./src/routes/apiRouter.js`)


const app = express()
const PORT = 3000

app.use('/', pageRouter)

app.listen(PORT, ()=>{
  console.log(`App listening on localhost:${PORT}`);
})
