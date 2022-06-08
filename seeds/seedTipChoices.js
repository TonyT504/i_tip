const { TipChoices } = require('../models/TipChoices');

const tipChoiceAmts = [
    {
        tip_percentage: 10
    },
    {
        tip_percentage: 15
    },
    {
        tip_percentage: 20
    }
];

const seedTipChoices = () => TipChoices.bulkCreate(tipChoiceAmts);

module.exports = seedTipChoices;