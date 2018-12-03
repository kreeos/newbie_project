const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    userid: String,
    date: Date,
    description: String,
    lucky_number: String,
    compatibility: String,
    mood: String
});

module.exports = mongoose.model('history', historySchema);
