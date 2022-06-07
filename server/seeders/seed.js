const db = require('../config/connection');
const { Plant } = require('../models');
const plantSeeds = require('./plantSeeds.json');

db.once('open', async () => {
  try {

    await Plant.create(plantSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
