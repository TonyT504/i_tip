const router = require('express').Router();

const userRoutes = require('./user-routes');
const spendingRoutes = require('./spendings-routes');

 router.use('/users', userRoutes);
 router.use('', spendingRoutes);

module.exports = router;
