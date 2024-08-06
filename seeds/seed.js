const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const gifdata = require('./gifData.json');
const projectData = require('./projectData.json');
const gifSeeds = require('./gifSeeds.js');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
