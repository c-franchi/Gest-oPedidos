// src/models/Material.js
const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  type: { type: String, required: true },
  model: { type: String, required: true },
  stock: { type: Number, default: 0 },
});

const Material = mongoose.model('Material', materialSchema);
module.exports = Material;
