const express = require('express');
const router = new express.Router();

const User = require('../models/User');

//kreiranje novog korisnika
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        const data = await user.save();
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }

});
//dobavljanje postojećih korisnika za prikaz na listi korisnika
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(400).send(e);
    }

});

//brisanje korisnika na temelju _id
router.delete('/users/', async (req, res) => {
    try {
         const user = await User.findByIdAndDelete(req.query._id);
         if (!user) {
             return res.status(404).send("User not found.");
         }
        res.send(req.query._id);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;