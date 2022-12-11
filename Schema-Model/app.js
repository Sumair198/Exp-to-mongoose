const express = require('express')
const app = express()
const port = process.env.PORT || '2000'
//connection
const connectiondb = require('./db/connectiondb')
connectiondb()

//Model import
// require('./Model/Student') // simple import model

//Create doc import
// const createDoc = require('./Model/Student')

//read doc import
// const getdoc = require('./Model/Student')

//import multipe
// const {createDoc,getdoc} = require('./Model/Student') //import model and import doc function

// updatedoc import
// const updatedocument = require('./Model/Student')

//delete import
const deleteDocument = require('./Model/Student')


//create call
// createDoc()

//read call
// getdoc()


// updatedocument 
// updatedocument('6394b388a151c521830a3450')
// updatedocument()

//deletedocument
deleteDocument()

app.listen(port , ()=>
{
    console.log(`Server listening at ${port}`)
})

