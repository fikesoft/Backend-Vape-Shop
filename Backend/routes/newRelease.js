const express = require('express');
const router = express.Router();
const Product = require('../models/catalogSchema.js');

router.post('/new-release', async (req, res) => {
  const { category } = req.body;

  try {
    // Validate that category is provided and valid
    if (!['catalog', 'new release'].includes(category)) {
      return res.status(400).json({ error: 'Invalid category specified' });
    }

    // Query database for products matching the specified category
    const products = await Product.find({ product_category: category });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
