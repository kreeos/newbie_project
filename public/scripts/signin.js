const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('./model/user.js');
var request = require('request');
app.use(express.static('static'));


app.get('/api/v1/signin', (req, res) => {
  console.log(req.body.sign_id);
  console.log(req.body.sign_password);
    User.find({}, (err, user) => {
        return res.json(user)
    })
})
