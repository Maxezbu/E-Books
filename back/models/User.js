const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');

const schema  = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
  },
  telefono: {
    type: Number,
  },
  localidad: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  salt: {
    type: String
  }
});

const User = mongoose.model("User", schema);

User.prototype.encryptPassword = async function (password){
  const salt = await bcrypt.genSalt(10)
  this.salt = salt
  return bcrypt.hash(password, this.salt)
}

User.prototype.validPassword = async function (passwordEnLogin) {
  return this.password === await bcrypt.hash(passwordEnLogin, this.salt)
} 

module.exports = User;

