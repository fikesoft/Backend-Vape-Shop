const express = require('express');
const cors = require('cors');
const connectDB = require('./db/database.js'); 
const createAdmin = require('./db/createAdmin.js');

// Import routes
const orderRoutes = require('./routes/orders');
const subscriptionRoutes = require('./routes/subscriptions');
const login = require('./routes/login.js');
const getItems = require('./routes/getItems.js');
const editItems = require('./routes/editItems.js');
const addItem = require('./routes/addItem.js'); // Ensure this path is correct
const catalogFetch = require('./routes/catalog.js')
const newReleaseFetch = require('./routes/newRelease.js')

const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from React app
app.use(express.json()); // Parse JSON bodies

// Database connection and admin setup
connectDB();
createAdmin();

// Mount routes under /api
app.use('/api', orderRoutes);
app.use('/api', subscriptionRoutes);
app.use('/api', login);
app.use('/api', getItems);
app.use('/api', editItems);
app.use('/api', addItem); 
app.use('/api', catalogFetch)
app.use('/api', newReleaseFetch)
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
