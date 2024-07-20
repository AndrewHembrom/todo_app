const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://andrewjoyhembrom:Andrew2003@cluster0.xukkrrj.mongodb.net/ToDo_app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

mongoose.exports = {
    todo
}