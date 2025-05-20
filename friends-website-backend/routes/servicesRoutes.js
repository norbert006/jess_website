const express = require('express');
const router = express.Router();
const { getServicesContent, updateServicesContent } = require('../controllers/servicesController');

router.get('/services', getServicesContent);
router.put('/update/:id', updateServicesContent);

module.exports = router;
