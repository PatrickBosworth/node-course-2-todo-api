// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to db server');
  }
  console.log('connected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

//Insert new doc into the Users collection: (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Pete',
  //   age: 44,
  //   location: 'Leeds'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('couldnt update - something went pete tong', err)
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  client.close();
} );
