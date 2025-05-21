const express = require('express');
const router = express.Router();

// Replace with real authentication logic
const validUser = { username: process.env.ADMIN_USERNAME, password: process.env.PASSADMIN_PASSWORDWORD };

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === process.env.ADMIN_USERNAME && password === process.env.PASSADMIN_PASSWORDWORD) {
        // Simple session example
        req.session.user = username;
        return res.json({ success: true });
    }

    res.status(401).json({ error: 'Invalid credentials' });
});

router.get('/me', (req, res) => {
    if (req.session?.user) {
        return res.json({ user: req.session.user });
    }
    res.status(401).json({ error: 'Not logged in' });
});

module.exports = router;