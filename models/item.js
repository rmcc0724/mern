//Lets use mongoose Schema for our data model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//here we define how are data table is setup, and what items are required, the type, formatt, etc
ItemsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = Item = mongoose.model('item', ItemsSchema);