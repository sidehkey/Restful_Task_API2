var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    title:{type:String, required: true, minlength: 3},
    description: {type: String, required: true, minlength: 3}, 
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}

});

var Task = mongoose.model("Task", TaskSchema);

module.exports = Task;