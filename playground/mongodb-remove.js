const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove('5a89c14e2e3965cd23bb82d9').then((todo) => {
//     console.log(todo);
// });

// Todo.findOneAndRemove({_id: '5a89be626241f7585e035967'}).then((todo) => {

// });