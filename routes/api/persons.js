const express = require('express');
const router = express.Router();
const PersonController = require('../../controllers/PersonController');
const ROLES_LIST = require("../../config/roles_list")
router.get('/:id', PersonController.getPerson)
const verifyRoles = require("../../middleWares/verifyRoles")
 
 
router.route('/')
 .get(PersonController.getAllPersons)
 .post(verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Editor), PersonController.createPerson)
 .delete(verifyRoles(ROLES_LIST.Admin),PersonController.deletePerson)
 .put(verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Editor), PersonController.updatePerson);

module.exports = router;