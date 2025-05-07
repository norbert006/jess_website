const Content = require('../models/Content');

// GET all home content
const getHomeContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE specific item
const updateContent = async (req, res) => {
  const { id } = req.params;
  const { label, imageUrl, link } = req.body;

  try {
    const updated = await Content.findByIdAndUpdate(
      id,
      { label, imageUrl, link },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getHomeContent, updateContent };
