const sequelize = require('../config/connection');
const seedTipChoices = require('./seedTipChoices');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await seedReceipts();

  await seedTipChoices();

  process.exit(0);
};

seedAll();
