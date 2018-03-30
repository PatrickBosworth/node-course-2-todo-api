const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5abe4a884e764430d4c92881'}).then((todo) => {
  console.log(todo);
})

// Todo.findByIdAndRemove('5abe49e84e764430d4c92880').then((todo) => {
//   console.log(todo);
// })
