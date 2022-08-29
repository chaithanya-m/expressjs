var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Expres' });
// });
router.get('/', function(req, res, next) {
  res.render('home_page', { title: 'Home page' });
});
router.get('/manageUsers', function(req, res, next) {
  res.render('manage_users', { title: 'about usres' });
});
router.get('/manageAddres', function(req, res, next) {
  res.render('manage_address', { title: 'user addres details' });
});

router.get('/listOfUsers', function(req, res, next) {
  res.render('list_of_users', { title: 'list of users' });
});
router.get('/addUsers', function(req, res, next) {
  res.render('add_users', { title: 'Add new users' });
});
router.get('/addAddress', function(req, res, next) {
  res.render('add_address', { title: 'fill the address details' });
});
router.get('/listOfaddress', function(req, res, next) {
  res.render('list_of_address', { title: 'Address details' });
});
module.exports = router;
