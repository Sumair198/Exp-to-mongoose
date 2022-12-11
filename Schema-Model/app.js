const express = require('express')
// const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || '2000'
//connection
const connectiondb = require('./db/connectiondb')

connectiondb()

// require('./Model/Student') // simple import model

//create call import
// const createDoc = require('./Model/Student')

//import simple
const getdoc = require('./Model/Student') //import model and import doc function


//import multipe
// const {createDoc,getdoc} = require('./Model/Student') //import model and import doc function



//read data
// const getdoc = require('./Model/Student')



//create call
// createDoc()


//read call
getdoc()


app.listen(port , ()=>
{
    console.log(`Server listening at ${port}`)
})

