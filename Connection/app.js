const express = require('express')
const app = express()
// const mongoose = require('mongoose')
const port = process.env.PORT || '4000'
const connectdb = require('./db/connectdb')

// app.get('/' , (req,res)=>
// {
//     res.send('Server starting or working')
// })

connectdb()


app.listen(port, ()=>
{
    console.log(`Server listening at ${port} `)
} )