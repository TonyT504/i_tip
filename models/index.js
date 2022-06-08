const User = require('./User');
const Receipts = require('./Receipts');
const TipChoices = require('./tipChoices');

// Receipts.hasMany(TipChoices, {
//   foreignKey: 'tip_choice_id',
// });

// TipChoices.belongsTo(Receipts, {
//   foreignKey: 'tip_choice_id',
// });

module.exports = { User, TipChoices, Receipts };
