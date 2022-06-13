const User = require('./User');
const Receipts = require('./Receipts');
const TipChoices = require('./TipChoices');

// User.hasMany(Receipts, {
//   foreignKey: 'user_id',
// });

// Receipts.hasOne(User, {
//   foreignKey: 'user_id',
// });

module.exports = { User, TipChoices, Receipts };
