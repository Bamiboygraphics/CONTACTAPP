// SET UP ROUTES
const express = require('express');
const router = express.Router();
const ContactCtrl = require('../controllers/contactController');

//POST request to /contacts to create a new contact
router.post('/', ContactCtrl.createContact);

//GET  request to /contacts to fetch all contact
router.get('/', ContactCtrl.fetchContacts);

//GET request to /contacts/:id to fetch a single contact
router.get('/:id', ContactCtrl.fetchSingleContact);

//PUT request to /contacts/:id to update an exixting contact
router.put('/:id', ContactCtrl.updateContact);

//DELETE request to /contacts/:id to delete an exixting contact
router.delete('/:id', ContactCtrl.deleteContact);

//EXPORTS
module.exports = router;
