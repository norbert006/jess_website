const express = require('express');
const router = express.Router();
const { getHomeContent, updateContent } = require('../controllers/contentController');

router.get('/home', getHomeContent);
router.post('/update/:id', updateContent);

module.exports = router;
