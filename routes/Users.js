const express = require('express')
const app = express.Router()
const cors = require('cors')

const User = require('../models/User')
app.use(cors())

// Save to DataBase

app.post('/register', (req, res) => {
  
  const userData = new User ({
    school_parent :  req.body.school_parent,
    name :  req.body.name,
    established_year :  req.body.established_year,
    no_of_stud :  req.body.no_of_stud,
    brand : req.body.brand,
    email : req.body.email,
    principal_name : req.body.principal_name,
    level_serviced : req.body.level_serviced,
    address : req.body.address,
    state : req.body.state,
    district : req.body.district,
    city : req.body.city,
    postcode : req.body.postcode,
    contact : req.body.contact,
    contactno : req.body.contactno,
    contacttype : req.body.contacttype,
    classno : req.body.classno,
    boardtype : req.body.boardtype,
  });

  //To make sure we are getting our request properly
  console.log(req.body);

  userData.save()
    .then(data => { res.send(data);})
    .catch(err => {res.status(500).send({message: err.message || "Some error occurred."});}); 
 
})



module.exports = app
