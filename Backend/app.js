const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from React app
app.use(express.json()); // Parse JSON bodies

// Import routes
const orderRoutes = require('./routes/orders');
const subscriptionRoutes = require('./routes/subscriptions');

// Use routes
app.use('/api', orderRoutes);
app.use('/api', subscriptionRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
