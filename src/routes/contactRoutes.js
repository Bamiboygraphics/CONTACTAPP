// SET UP ROUTES
const express = require('express');
const router = express.Router();
const ContactCtrl = require('../controllers/contactController');

//POST request to /contacts to create a new contact
router.post('/contacts', ContactCtrl.createContact);

//GET  request to /contacts to fetch all contact
router.get('/contacts', ContactCtrl.fetchContacts);

//GET request to /contacts/:id to fetch a single contact
router.get('/contacts/:id', ContactCtrl.fetchSingleContact);

//PUT request to /contacts/:id to update an exixting contact
router.put('/contacts/:id', ContactCtrl.updateContact);

//DELETE request to /contacts/:id to delete an exixting contact
router.delete('/contacts/:id', ContactCtrl.deleteContact);

//EXPORTS
module.exports = router;
