const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPlants` array in User.js
const plantSchema = new Schema({

  plantId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  hardiness: {
    type: String,
  },
  sun: {
    type: String,
  },
  lifeSpan: {
    type: String,
  },
  medianLifespan: {
    type: String,
  },
  firstHarvest: {
    type: String,
  },
  lastHarvest: {
    type: String,
  },
  height: {
    type: String,
  },
  spread: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = plantSchema;
