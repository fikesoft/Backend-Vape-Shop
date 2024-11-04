const express = require('express');
const router = express.Router();
const productSchema = require('../models/catalogSchema.js'); 

// Authentication route
router.get('/get/items', async (req, res) => { // Changed to GET
    try {
        const catalog = await productSchema.find(); // Fetch items from MongoDB
        res.status(200).json(catalog); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error: error.message });
    }
});

module.exports = router;
