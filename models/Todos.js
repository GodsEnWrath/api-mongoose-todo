const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    email: {
        type: String,
        required: true

    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    name: {
             type: String
           }
});

const Todos = mongoose.model("todos2", todoSchema);

module.exports = Todos;