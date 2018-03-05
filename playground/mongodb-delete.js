// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to db server');
  }
  console.log('connected to MongoDB server');
  const db = client.db('TodoApp')

//deleteMany
// db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) =>
// {
//   console.log(result);
// });


//deleteOne
// db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
//   console.log(result);
// })


//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// })

//deleteMany users
// db.collection('Users').deleteMany({location: 'Leeds'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id: new ObjectID('5a9be2d4584160252ce8c189')}).then((result) => {
  console.log(result);
});


  // client.close();
} );
