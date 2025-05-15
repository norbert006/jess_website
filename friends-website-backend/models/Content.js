// This schema matches what each homepage block will display.
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  label: { type: String, required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true } // this could be a URL slug, e.g., "/services/design"
});

module.exports = mongoose.model('Content', contentSchema);
