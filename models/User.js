const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Add the bcrypt library
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6; // 6 is a reasonable value

const userSchema = new Schema(
  {
    name: { 
      type: String, 
      required: true 
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
    role: {
      type: String,
      default: "agent",
      lowercase: true
    },
    rank: {
      type: Number,
      default: 0,
    },
    rankMessage : {
      type: String,
      default: `I am a loser. I should probably update my rank message...` 
    },
    image: {
      type: String,
      default: "https://i.pinimg.com/736x/bd/7f/da/bd7fda264ecd53d587f17b610b731cef.jpg"
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
},
  {
    timestamps: true,
    // Even though it's hashed - don't serialize the password
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre('save', async function (next) {
  // 'this' is the user doc
  if (!this.isModified('password')) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);
