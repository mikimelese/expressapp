//const product = require('../models/product');
const person = {};
person.persons = require('../models/person.json');
const path = require('path');

exports.getPerson = (req, res) => {
  const person1 = person.persons.find(person => person.id === parseInt(req.params.id));
  res.json(person1);
};