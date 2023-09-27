const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const dbName = "mentor-and-student=assigning"
const url =`mongodb+srv://faizaafrin:Todaywin10@cluster0.yshpzyi.mongodb.net/${dbName}`

module.exports={url,mongodb,MongoClient}
