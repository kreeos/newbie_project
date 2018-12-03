const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userid: String,
    password: String,
    horoscope: String,
    // favorite: String
});

module.exports = mongoose.model('user', userSchema);
