const Content = require('../models/Services.js');

// GET all services content
const getServicesContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE specific service
const updateServicesContent = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await Content.findByIdAndUpdate(
      id,
      { $set: req.body }, // only update the fields that exist in req.body
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { getServicesContent, updateServicesContent };
