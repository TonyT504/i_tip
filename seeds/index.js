const sequelize = require('../config/connection');
const seedUsers = require('./Users');
const seedTipChoices = require('./TipChoices');
const seedReceipts = require('./Receipts');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  
  await seedTipChoices();

  await seedReceipts();

  process.exit(0);
};

seedAll();
