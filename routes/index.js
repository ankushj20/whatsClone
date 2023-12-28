var express = require('express');
var router = express.Router();
const userModel = require("./users")

var users = require('./users');
var passport = require('passport');
var localStrategy = require('passport-local');
passport.use(new localStrategy(users.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', (req, res, next) =>{
  res.render('register')
})
router.post('./register', (req, res, next) => {
  var newUser = {
    username: req.body.username,
    contact: req.body.contact,
  };
  users
    .register(newUser, req.body.password)
    .then((result) => {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/')
      })
    })
    .catch((err) => {
      res.send(err);
    });
  
});

router.post('/login', passport.authenticate('local',{
  successRedirect: '/',
  failureRedirect: '/login',
}),
(req, res, next) =>{ }
);

router.get('/login',(req, res, next) => {
  res.render('login')
});

module.exports = router;
