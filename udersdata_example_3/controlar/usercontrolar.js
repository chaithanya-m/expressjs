const userDao = require('../dao/user.dao.js.js.js');
var express = require('express');
const User = require('../model/user');
const Address = require('../model/user');

const db = require('../config/connectDB');


var userController = {
    HomePage: HomePage,
    ListofUsers: ListofUsers,
    AddUsers: AddUsers,
    AddToDB: AddToDB,
    Update:Update,
    UpdateTable:UpdateTable,
    Delete: Delete
}

// home page
async function HomePage(req, res, next)  {
  res.render('index', { title: 'Home Page' });
}

// list of users
async function ListofUsers(req, res, next)  {
  const users = await User.findAll(); 
  res.render('listofusers', {title:'list of users', users});
}

//uder details form
async function AddUsers(req, res, next ){
  res.render('add', { title: 'Add New User', FName: '', LName: "", Dob: "",Age: "",error:[]});
}

// add user details to db
async function AddToDB(req, res, next){
  const user = await User.create({
    firstName:req.body.FName,
    lastName: req.body.LName,
    DOB: req.body.Dob,
    Age: req.body.Age
  })
  .catch((errors) => {
    console.log(errors)
    debugger;
    res.render('add', { title: 'Add New User', FName: req.body.FName, LName: "", Dob: "",Age: "", errors: errors });
  });
  res.redirect('/')
}

//
async function Update(req, res, next){
  const user = await User.findOne({
    attributes :['id','firstName', 'lastName','DOB','Age'],
    where: {
      id: req.params.id
     }
  });
  console.log(req.params.id)
    // res.render('Update', { user });
    res.render('update', {
      title: 'update users', 
      id: user.id,
      FName: user.firstName,
      LName: user.lastName,
      Dob: user.DOB,
      Age: user.Age
  });
}
async function UpdateTable(req, res, next){

  // console.log(req.body.FName)
  await User.upsert({ 
    id:req.params.id,
    firstName: req.body.FName,
    lastName: req.body.LName,
    DOB: req.body.Dob,
    Age: req.body.Age
   }, 
   { where: {id: req.params.id}
   
  });
  
  res.redirect('/listofUsers')
}

async function Delete(req, res, next){
  await User.destroy({
    where: {id: req.params.id}
  });
  res.redirect("/listofUsers")
}
module.exports = userController;