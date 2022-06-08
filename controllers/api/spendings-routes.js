const router = require('express').Router();
const { TipChoices, Receipts } = require('../../models');

// GET all receipts
router.get('/spendings', (req, res) => {
    Receipts.findAll({
        include: [
            {
              model: Receipts,
              attributes: ['rest_name', 'og_amt', 'tip_amt', 'new_amt'],
            },
        ]
    })
    .then(response => {
        res.json(response)
    })
    .catch(err => res.status(400).json(err));
});

// POST new receipt
router.post()