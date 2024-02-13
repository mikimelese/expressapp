const express = require('express');
const router = express.Router();
const PersonController = require('../../controllers/PersonController');

router.get('/:id', PersonController.getPerson)
 
 
router.route('/')
 .get(PersonController.getAllPersons)
 .post(PersonController.createPerson)
 .delete(PersonController.deletePerson)
 .put(PersonController.updatePerson);

module.exports = router;