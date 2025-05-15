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
  const { serviceName, mainTitle, intro,
    subtitle1, subtitle2, subtitle3, subtitle4,
    para1, para2, para3, para4 } = req.body;

  try {
    const updated = await Content.findByIdAndUpdate(
      id,
      {
        serviceName, mainTitle, intro,
        subtitle1, subtitle2, subtitle3, subtitle4,
        para1, para2, para3, para4
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getServicesContent, updateServicesContent };
