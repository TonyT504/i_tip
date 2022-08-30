const router = require('express').Router();

// main login page
router.get('/', (req,res) => {
    res.render('homepage')
});

// create new receipt page
router.get('/newReceipt', (req, res) => {
    res.render('newReceipt')
});

// login page
router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;