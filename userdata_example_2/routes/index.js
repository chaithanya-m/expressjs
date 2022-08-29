var express = require('express');
var router = express.Router();
var flash = require('express-flash');
var connection = require('../lib/db.js');
/* GET home page. */
router.get('/', function (req, res, next) {
    connection.query('SELECT * FROM users ORDER BY ID ', function (err, rows) {
        if (err) {
            req.flash('error', err);
            res.render('users', { page_title: "users - Node.js", data: '' });
        } 
        else {
            res.render('users', { page_title: "users - Node.js", data: rows });
        }
    });
});
// requst new user
router.get('/Add', function (req, res, next) {
    res.render('Add', { title: 'Add New User', FName: '', LName: "", Dob: "",Age: "" });
});
// ADD NEW USER POST ACTION
router.post('/add', function (req, res, next) {
    var user = {
        'FirstName': req.body.FName,
        'LastName': req.body.LName,
        'age': req.body.Age,
        'DOB':req.body.Dob
    }
    connection.query('INSERT INTO users SET ?', user, function (err, result) {
        if (err) {
            res.redirect('/');
        } 
        else {
            res.redirect('/');
        }
    });
});
// delete user
router.get('/delete/:ID', function (req, res, next){
    var user = { 'ID': req.params.ID}
    connection.query('DELETE FROM users WHERE ID = ' + req.params.ID,user, function(err, result) {
        if (err) {
        res.redirect('/')
        } 
        else {
        res.redirect('/')
        }
    });
});
// edit form
router.get('/edit/:ID', function(req, res, next){
    connection.query('SELECT * FROM users WHERE id = ' + req.params.ID, function(err, rows, fields) {
        if(err) throw err 
        if (rows.length <= 0) {
            res.redirect('/')
        }
        else {
            res.render('update', {
                title: 'update users', 
                Id: rows[0].ID,
                FName: rows[0].FirstName,
                LName: rows[0].LastName,
                Dob: rows[0].DOB,
                Age: rows[0].age
            });
        }
    });
});
// EDIT USER POST ACTION
router.post('/update/:id', function(req, res, next) { 
    var user = {
        'FirstName': req.body.FName,
        'LastName': req.body.LName,
        'age': req.body.Age,
        'DOB':req.body.Dob
    }
    connection.query('UPDATE users SET ? WHERE id = ' + req.params.id, user, function(err, result) {
        if (err) {
            res.redirect('/');
        } 
        else {
            res.redirect('/');
        }
    });
});

module.exports = router;
