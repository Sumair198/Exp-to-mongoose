const mongoose = require('mongoose')

const connectiondb = ()=>
{
    mongoose.connect('mongodb://localhost:27017/schooldb').then(()=>
{
    console.log('Connected Sucessfully')
})
.catch((err)=>
{
    console.log(err)
})
}

module.exports = connectiondb