const express = require("express");
const router = express.Router();
const Blague = require("../models/blagues");

/* GET liste de blagues */
router.get('/blagues', async (req, res) => {
    try {
        const blagues = await Blague.findAll();
        res.json(blagues);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/* GET blague by id */

router.get('/blagues/:id', async (req, res) => {
    try {
        const blague = await Blague.findByPk(req.params.id);
        if (!blague) {
            return res.status(404).json({ message: "Blague not found." });
        }
        res.json(blague);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/* GET blague by random */

router.get('/blagues/hasard/random', async (req, res) => {
    try {
        const blagues = await Blague.count();
        const random = Math.floor(Math.random() * blagues)+1;
        const randomBlague = await Blague.findByPk(Number(random));
        res.json(randomBlague);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

/* POST blague */
router.post('/blagues', async (req, res) => {
    try {
        const { blague, reponse } = req.body;
        // Simple validation
        if (!blague || !reponse) {
            return res.status(400).json({ message: "Blague and reponse are required." });
        }
        const newBlague = await Blague.create({ blague, reponse });
        res.status(201).json(newBlague);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;



