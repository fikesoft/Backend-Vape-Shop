const express = require('express');
const router = express.Router();
const productSchema = require('../models/catalogSchema.js'); 

// Route to add a new item
router.post('/add/items', async (req, res) => {
    try {
        const newItem = new productSchema(req.body); // Create a new item based on the incoming data
        await newItem.save(); // Save the item to the database
        res.status(201).json({ message: 'Item added successfully', item: newItem });
    } catch (error) {
        res.status(500).json({ message: 'Error adding item', error: error.message });
    }
});

module.exports = router;
