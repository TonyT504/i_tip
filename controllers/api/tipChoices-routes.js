const router = require('express').Router();
const { TipChoices } = require('../../models');

// GET all receipts
router.get('/', (req, res) => {
    TipChoices.findAll({
        // include: [Receipts]
    })
    .then(response => res.status(200).json(response))
    .catch(err => res.status(400).json(err));
});

// POST new tipChoice