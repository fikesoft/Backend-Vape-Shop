const express = require('express');
const router = express.Router();
const bot = require('../bot'); // Import the bot instance
const { orderChatId } = require('../config/telegram'); // Import order chat ID

// POST endpoint to handle order details
router.post('/order', (req, res) => {
    const orderDetails = req.body;

    if (!orderDetails || Object.keys(orderDetails).length === 0) {
        return res.status(400).json({ error: 'Order details are missing' });
    }

    const orderMessage = `
        New Order:
        Name: ${orderDetails.name}
        Surname: ${orderDetails.surname}
        Phone Number: ${orderDetails.phoneNumber}
        Address: ${orderDetails.address}
        Cart Items: ${JSON.stringify(orderDetails.cartItems)}
        Agree to Contact: ${orderDetails.agreeContact ? 'Yes' : 'No'}
    `;

    bot.sendMessage(orderChatId, orderMessage);
    res.json({ message: 'Order received and sent to Telegram!' });
});

module.exports = router;
