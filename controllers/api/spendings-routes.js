const router = require('express').Router();
const { TipChoices, Receipts } = require('../../models');

// GET all receipts
router.get('/', (req, res) => {
    Receipts.findAll({
        // include: [Receipts]
    })
    .then(response => res.status(200).json(response))
    .catch(err => res.status(400).json(err));
});

// // POST new receipt
router.post('/', (req,res) => {
    Receipts.create({
        rest_name: req.body.rest_name,
        og_amt: req.body.og_amt,
        tip_choice_id: req.body.tip_choice_id,
        tip_amt: req.body.tip_amt,
        new_amt: req.body.new_amt
    })
    .then(response => res.status(200).json(response))
    .catch(err => res.status(400).json(err))
});

module.exports = router;