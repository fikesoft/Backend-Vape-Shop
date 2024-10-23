// routes/subscriptions.js
const express = require('express');
const router = express.Router();
const bot = require('../bot'); // Import the bot instance
const { subscriptionChatId } = require('../config/telegram'); // Import subscription chat ID

// POST endpoint to handle phone number subscriptions
router.post('/subscribe', (req, res) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).json({ error: 'Phone number is missing' });
    }

    const subscriptionMessage = `New Subscription:\nPhone Number: ${phoneNumber}`;

    bot.sendMessage(subscriptionChatId, subscriptionMessage)
        .then(() => {
            res.json({ message: 'Phone number received and sent to Telegram!' });
        })
        .catch((error) => {
            console.error('Error sending phone number to Telegram:', error);
            res.status(500).json({ error: 'Failed to send phone number to Telegram.' });
        });
});

module.exports = router;
