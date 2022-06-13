const { Receipts } = require('../models');

const ReceiptSeeds = [
    {
        user_id: 1,
        rest_name: "Chipotle",
		og_amt: 23.11,
		tip_choice_id: 2,
	    tip_amt: 3.47,
		new_amt: 26.58
    },
    {
        user_id: 1,
        rest_name: "Texas Roadhouse",
		og_amt: 43.17,
		tip_choice_id: 3,
		tip_amt: 8.63,
		new_amt: 51.8
    }
];

const seedReceipts = () => Receipts.bulkCreate(ReceiptSeeds);

module.exports = seedReceipts;