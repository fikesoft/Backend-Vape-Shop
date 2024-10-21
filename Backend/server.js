const express = require('express');
const cors = require('cors'); // Enable CORS
const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from your React app
app.use(express.json()); // Parse JSON bodies

// Define a simple GET endpoint
app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
