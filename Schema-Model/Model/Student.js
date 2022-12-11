const mongoose = require('mongoose')
//schema / create
const studentSchema = mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    active: { type: Boolean }
})

//Model / compile
const StudentModel = mongoose.model('Student', studentSchema)

// insert data only one document

// const createDoc =  async () =>
// {
//     const studentDoc = new StudentModel({
//         name: 'Umair ul haq',
//         age: 28,
//         active: false 
//     })

//    const result = await studentDoc.save()
//    console.log(result)
// }
    
// insert data multiple document
    
// const createDoc =  async () =>
// {
//     const alidoc = new StudentModel({
//         name: 'ali',
//         age: 18,
//         active: false 
//     })
//     const ayeshadoc = new StudentModel({
//         name: 'ayesha',
//         age: 14,
//         active: true 
//     })
//     const hassandoc = new StudentModel({
//         name: 'hassan',
//         age: 25,
//         active: true 
//     })

//    const result = await StudentModel.insertMany([alidoc,ayeshadoc,hassandoc])
//    console.log(result)
// }

            //getData

//create multiple and read data

// const createDoc =  async () =>
// {
//     const waseemdoc = new StudentModel({
//         name: 'waseem',
//         age: 18,
//         active: false 
//     })
//     const naeemdoc = new StudentModel({
//         name: 'naeem',
//         age: 14,
//         active: true 
//     })
//     const saifdoc = new StudentModel({
//         name: 'saif',
//         age: 25,
//         active: true 
//     })

//    const result = await StudentModel.insertMany([waseemdoc,naeemdoc,saifdoc])
//    console.log(result)
// }

//read
// const getdoc =  async () =>
// {
//    const result = await StudentModel.find()
//    console.log(result)
// }

// module.exports = {createDoc,getdoc};

//only read data / get all data
// const getdoc =  async () =>
// {
//    const result = await StudentModel.find()
//    console.log(result)
// }
// module.exports = getdoc;

//read all data one by one and get only name and age
// const getdoc =  async () =>
// {
//    const result = await StudentModel.find()
// //    console.log(result)
//    result.forEach((i) => console.log(
//        i.name,
//        i.age
//    ))
// }

// module.exports = getdoc;


//read all data with specific properties // subka mujhe name or age chaiye // kuch properties chaiye mujhe //include
// const getdoc =  async () =>
// {
//    const result = await StudentModel.find().select('name age')
//    console.log(result)
// }

// module.exports = getdoc;

// exclude : means ye properties nahi chaiye mujhe
// const getdoc =  async () =>
// {
//    const result = await StudentModel.find().select('-name -age')
//    console.log(result)
// }

// module.exports = getdoc;


//read document by property //filter those student they age 25
// const getdoc =  async () =>
// {
//    const result = await StudentModel.find({age:25})
//    console.log(result)
// }

// module.exports = getdoc;


//count documents
// const getdoc =  async () =>
// {
//    const result = await StudentModel.find().countDocuments()
//    console.log(result)
// }

// module.exports = getdoc;

//sort
// const getdoc =  async () =>
// {
//    const result = await StudentModel.find().sort({age:1})
//    console.log(result)
// }

// module.exports = getdoc;

//age = > 18
const getdoc =  async () =>
{
   const result = await StudentModel.find({age:{$gte:18}})
   console.log(result)
}

module.exports = getdoc;
