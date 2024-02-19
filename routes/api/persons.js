const express = require('express');
const router = express.Router();
const PersonController = require('../../controllers/PersonController');
const verifyJWT = require('../../middleWares/verifyJWT');

router.get('/:id', PersonController.getPerson)
 
 
router.route('/')
 .get(verifyJWT, PersonController.getAllPersons)
 .post(PersonController.createPerson)
 .delete(PersonController.deletePerson)
 .put(PersonController.updatePerson);

module.exports = router;