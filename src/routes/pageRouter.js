const Router = require(`express`).Router;
const pageRouter = Router()
const fs = require('fs-extra')

   pageRouter
    .get('/' , (req, res)=>{
        res.render('home.ejs')
    })

   pageRouter
    .get('/about', (req, res)=>{
        res.render('about.ejs')
    })

    pageRouter
     .get('/notFound', (req, res)=>{
         res.render('404.ejs')
     })




module.exports = pageRouter
