// db.js or config/db.js (wherever you have this file)
const mongoose = require('mongoose');
const { dbUrl } = require('../config/databaseData'); // Ensure this path is correct

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Stop the server if connection fails
    }
};

module.exports = connectDB;
