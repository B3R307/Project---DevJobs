const Router = require(`express`).Router;
const pageRouter = Router()
const fs = require('fs-extra')

pageRouter
  .get('/', (req, res)=>{
     fs.readFile(`${__dirname}/../views/home.html`, 'utf-8')
        .then((htmlData)=>{
           res.send(htmlData)
        })
   })

pageRouter
 .get('/about', (req, res)=>{
   fs.readFile(`${__dirname}/../views/about.html`, 'utf-8')
   .then((htmlData)=>{
     res.send(htmlData)
   })
 })




module.exports = pageRouter
