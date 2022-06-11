const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from Plant.js
const plantSchema = require('./Plant');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedPlants to be an array of data that adheres to the plantSchema
    // savedPlants: [plantSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `plantCount` with the number of saved plants we have
userSchema.virtual('plantCount').get(function () {
  return this.savedPlants.length;
});

const User = model('User', userSchema);

module.exports = User;
