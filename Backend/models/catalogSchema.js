const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  product_name: {
    type: String,
    required: true,
    trim: true
  },
  product_img_url: {
    type: String,
    required: true,
    trim: true
  },
  product_img_alt: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: String, // This should be changed to Number type if you're only storing numerical values
    required: true,
    min: 0 // Ensures price is not negative
  },
  product_category: {
    type: String,
    enum: ['catalog', 'new release'],
    required: true
  }
});

// Create the model and export it
const Product = mongoose.model('Product', productSchema, 'catalog-vape');

module.exports = Product;
