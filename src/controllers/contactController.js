// SET UP SCHEMA
const Contact = require('../models/contact');
const express = require('express');

// POST ROUTES
exports.createContact = async (req, res) => {
  const { name, email, phone, country, relationship } = req.body;
  const newContact = await Contact.create(
    {
      name,
      email,
      phone,
      country,
      relationship,
    },
    (err, newContact) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res.status(200).json({ message: 'Contact created', newContact });
      }
    }
  );
};

// GET ROUTES - All Contacts
exports.fetchContacts = (req, res) => {
  Contact.find({}, (err, contacts) => {
    if (err) {
      res.status(500).json({ message: err });
    } else {
      res.status(200).json({ contacts });
    }
  });
};

// GET ROUTES - Single Contact
exports.fetchSingleContact = (req, res) => {
  Contact.findById(req.params.id, (err, contacts) => {
    if (err) {
      res.status(500).json({ message: err });
    } else if (!contacts) {
      res.status(404).json({ message: 'Contact not found' });
    } else {
      res.status(200).json({ contacts });
    }
  });
};

// PUT ROUTES
exports.updateContact = async (req, res) => {
  const { name, email, phone, country, relationship } = req.body;
  const newContact = await Contact.findByIdAndUpdate(
    req.params.id,
    {
      name,
      email,
      phone,
      country,
      relationship,
    },
    (err, Contact) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else if (!Contact) {
        return res.status(404).json({ message: 'Contact not found' });
      } else {
        Contact.save((err) => {
          if (err) {
            return res.status(400).json({ message: err });
          } else {
            return res
              .status(200)
              .json({ message: 'Contact Updated Sucessfully' });
          }
        });
      }
    }
  );
};

// DELETE ROUTES
exports.deleteContact = (req, res) => {
  Contact.findByIdAndDelete(req.params.id, (err, contacts) => {
    if (err) {
      res.status(500).json({ message: err });
    } else if (!contacts) {
      res.status(404).json({ message: 'Contact not found' });
    } else {
      res.status(200).json({ message: 'Contact deleted successfully' });
    }
  });
};
