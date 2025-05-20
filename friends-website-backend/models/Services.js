// This schema matches what each homepage block will display.
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
  urlName: { type: String, required: true },
  mainTitle: { type: String, required: true },
  intro: { type: String, required: true },
  subtitle1: { type: String, required: true },
  subtitle2: { type: String, required: true },
  subtitle3: { type: String, required: true },
  subtitle4: { type: String, required: false },
  para1: { type: String, required: true },
  para2: { type: String, required: true },
  para3: { type: String, required: true },
  para4: { type: String, required: false },
  img1: { type: String, required: false },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  img4: { type: String, required: false },
});

module.exports = mongoose.model('Service', serviceSchema);
