const express = require('express');
const router = express.Router();
const Admin = require('../models/adminLoginSchema.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { securityKey } = require('../config/jwtPassword.js');

// Authentication route
router.post('/admin/auth', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });

        if (!admin) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (isMatch) {
            // Generate JWT with an expiration time
            const token = jwt.sign({ id: admin._id }, securityKey, { expiresIn: '1h' });
            return res.status(200).json({ message: 'Login successful', token });
        } else {
            return res.status(401).json({ message: 'Invalid password' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server error during login', error: error.message });
    }
});

module.exports = router