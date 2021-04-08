const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('./model/user.js');
const History = require('./model/history.js');
const cors = require('cors');
var request = require('request');
app.use(cors());
app.use(express.static('static'));

const API_PORT = 8000;

app.set('views','/Users/krislee/Documents/SPARCS/newbie/public/views');

app.engine('html',require('ejs').renderFile);


//middleware setting
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.set('views', __dirname+'/public/views');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//database connection
// const mongoose = require('mongoose');
// const db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', () => {
//     console.log("Connected to MongoDB server");
// });
// mongoose.connect('mongodb://localhost/newbie')



app.get('/',(req,res)=>{   //app.get -> if some other computer sends 'get' with url of /...
  res.render('index.html');
})  //req = request 객채 , res = response 객채

app.get('/horoscope',(req,res)=>{
  res.redirect('/');
})


//APIs
app.post('/api/v1/register', (req, res) => {
    //id, password, birthday
    let icons = ["aquarius", "pisces", "aries", "taurus", "gemini",
    "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn"];
    console.log(req.body.horoscope);

    if(req.body.password !== req.body.cpassword){
      console.log("Passwords do not match");
      return res.redirect('/register.html');
    }

    if (req.body.id.length === 0 || req.body.password.length === 0 || req.body.horoscope.length === 0) {
        console.log('Wrong input')
        return res.redirect('/register.html');
    }

    const user = new User();
    user.userid = req.body.id;
    user.password = req.body.password;
    user.horoscope = req.body.horoscope;

    user.save(err => {
        if (err) {
            console.log(err);
            return res.redirect('error.html');
        }
        console.log("success");
        return res.redirect('/index.html');
    });
})

app.post('/api/v1/signin', (req, res) => {
  // console.log(req.body.sign_id);
  // console.log(req.body.sign_password);
  const signid = req.body.sign_id;
  const signpw = req.body.sign_password;
    User.find({ userid: signid, password: signpw }, (err, user) => {
        if(user.length == 0){
          return res.redirect('/signin.html?=error');
          console.log("sign in error");
        }
        else{
          console.log(user[0].userid);
          return res.redirect('/main.html?user='+user[0].userid);
        }
        return res.json(user);
    }).limit(1);
})

app.get('/api/v1/load', (req, res) => {
    // console.log(req.body.cur_user);
    // console.log(req.query.cur_user);
    User.find({ userid: req.query.cur_user}, (err, user) => {
        return res.json(user)
    })
})

app.post('/api/v1/save', (req, res) => {
  const date = req.body.date;
  const description = req.body.description;
  const lucky_number = req.body.lucky_number;
  const compatibility = req.body.compatibility;
  const mood = req.body.mood;
  const userid = req.body.userid;

  const history = new History();
  let if_exist = 0;
  history.userid = userid;
  history.date = date;
  history.description = description;
  history.compatibility = compatibility;
  history.lucky_number = lucky_number;
  history.mood = mood;

  History.find({userid:userid, date:date}, (err, histories) => {
      if_exist = histories.length;
      if(if_exist == 0){
        history.save(err => {
            if (err) {
                console.log(err);
                return res.redirect('error.html');
            }
            console.log("success");
            return res.redirect(req.originalUrl);
        });
      }
  })

})


app.get('/api/v1/load_history', (req, res) => {
  const userid = req.query.cur_user;
  // console.log(userid);
  History.find({userid:userid}, (err, history) => {
    // console.log(history);
    return res.json(history);
  }).sort({"date":-1})
})




const server = app.listen(API_PORT,() =>{
  console.log('Server is running at http://localhost:8000')
})
