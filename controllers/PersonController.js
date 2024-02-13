const data = {
  persons : require('../models/person.json'),
  setPerson: function (data) {this.persons=data}
};


const getPerson = (req, res) => {
  const person1 = data.persons.find(person => person.id === parseInt(req.params.id));
  if(!person1) 
  res.status(400).json({'message': `person id ${req.params.id} is not found`});
  
  res.json(person1);
};

const createPerson = (req, res) => {
  const newPerson = {
    id : data.persons[data.persons.length - 1].id+1 ||1,
    Fname: req.body.Fname
  }
  if (!req.body.Fname){
    return res.status(400).json({'message':'name is missing'})
  }
  data.setPerson([...data.persons,newPerson]);
  res.status(201).json(data.persons)
}
const deletePerson = (req, res) => {
  const person = data.persons.find(per => per.id === parseInt(req.body.id));
  if(!person) 
  res.status(400).json({'message': `person id ${req.body.id} is not found`});

  const filtered = data.persons.filter(per => per.id !== parseInt(req.body.id));
  data.setPerson([...filtered]);
  res.json(data.persons);

}
const updatePerson = (req, res) => {
  const person = data.persons.find(per => per.id === parseInt(req.body.id));
  if(!person){
    return res.status(400).json({'message': `person id ${req.body.id}`})
  }
  if(req.body.Fname) person.Fname = req.body.Fname;
  const filtered = data.persons.filter(per => per.id !== parseInt(req.body.id));
  const unsortedarray = [...filtered, person];

  data.setPerson(unsortedarray.sort((a,b) => a.id > b.id? 1: a.id < b.id? -1: 0))
  res.json(data.persons);

}
const getAllPersons = (req, res) => {
  res.json(data.persons);
}

module.exports = {getAllPersons, getPerson, deletePerson, updatePerson, createPerson};

