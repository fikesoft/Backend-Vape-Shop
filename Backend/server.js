const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from React app
app.use(express.json()); // Parse JSON bodies

// Debug log for any incoming request
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

// Define a simple GET endpoint
app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Define a POST endpoint to handle order details
app.post('/api/order', (req, res) => {
    console.log('POST /api/order endpoint hit'); // Debug log
    console.log('Request headers:', req.headers); // Log headers
    console.log('Request body:', req.body); // Log body

    const orderDetails = req.body;
    if (!orderDetails || Object.keys(orderDetails).length === 0) {
        console.log('No order details found in the request body');
        return res.status(400).json({ error: 'Order details are missing' });
    }

    console.log('Order received:', orderDetails);

    res.json({ message: 'Order received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
