const mongoose = require('mongoose');
var validator = require("email-validator");

mongoose.Promise=global.Promise;
mongoose.connect( 'mongodb://localhost:27017/Users');

var Todo = mongoose.model('Todo', new mongoose.Schema ({
    text : {
        type: String,
        unique:true
        },
    completed: {
        type: Boolean
    },
    completedat: {
        type: Number
    },
    email: {
        type: String,
        required: true
        // validate: {
        //     validator: validator.isEmail,
        //     message: '{VALUE} is not a valid email address'

        // }
    }

}));

module.exports.Todo = Todo;
module.exports.mongoose = mongoose;
