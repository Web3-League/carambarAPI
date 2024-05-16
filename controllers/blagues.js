const JokeInstance = require("../models/blagues");
const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/blagues', async (req, res) => {
    try {
        const blagues = await JokeInstance.findAll();
        res.json(blagues);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.get('/blagues/:id', async (req, res) => {
    try {
        const blague = await JokeInstance.findByPk(req.params.id);
        if (!blague) {
            return res.status(404).json({ message: "Blague not found." });
        }
        res.json(blague);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/blagues/hasard/random', async (req, res) => {
    try {
        const blagues = await JokeInstance.count();
        const random = Math.floor(Math.random() * blagues)+1;
        const randomBlague = await JokeInstance.findByPk(Number(random));
        res.json(randomBlague);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/blagues', async (req, res) => {
    try {
        const { blague, reponse } = req.body;
        const newBlague = await JokeInstance.create({ blague, reponse });
        res.json(newBlague);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router;


