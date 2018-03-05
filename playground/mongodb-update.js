// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to db server');
  }
  console.log('connected to MongoDB server');
  const db = client.db('TodoApp')


db.collection('Users').findOneAndUpdate({
    name: "Patrick Bosworth"
}, {
  $set : { name: "John Smith"},
  $inc : { age: 1 }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})



// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5a9cee1d3635c81c28ce9324')
// }, {
//   $set :{
//     completed: true
//         }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// })



  // client.close();
} );
