const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a89a08eb141c88c522b87dc';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}
    
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos)
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
});

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('id not found');
    }
    console.log('Todo by Id', todo)
}).catch((e) => {
    console.log(e);
});

var id = '5a88d41ce12d0de5462f7c8e';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('user not found');
    }
    console.log('User by ID', user);
}).catch((e) => {
    console.log(e);
});