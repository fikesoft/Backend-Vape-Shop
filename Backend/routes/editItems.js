const express = require('express');
const router = express.Router();
const Catalog = require('../models/catalogSchema.js'); // Adjust the path as necessary

// POST route to handle updates and deletions
router.post('/edit-changes', async (req, res) => {
    const { _id, ...fields } = req.body;

    console.log('Received ID:', _id);

    // Validate _id
    if (!_id) {
        return res.status(400).json({ message: 'Missing item ID' });
    }

    try {
        // Find the item to check current data
        const item = await Catalog.findOne({ _id: _id });
        console.log('Found item:', item);

        // Check for empty fields in the updated data
        const hasEmptyField = Object.values(fields).some(value => value === '');

        console.log(`Attempting to process item with ID: ${_id}`);

        if (hasEmptyField) {
            const deleteResult = await Catalog.deleteOne({ _id: _id });
            console.log(`Delete operation result: ${deleteResult}`);

            if (deleteResult.deletedCount > 0) {
                return res.status(200).json({ message: `Deleted item with ID ${_id} successfully` });
            } else {
                return res.status(404).json({ message: `No item found with ID ${_id} to delete` });
            }
        } else {
            const result = await Catalog.updateOne({ _id: _id }, { $set: fields });
            console.log(`Update operation result: ${result}`);

            if (result.matchedCount === 0) {
                return res.status(404).json({ message: `No item found with ID ${_id}` });
            } else if (result.modifiedCount === 0) {
                return res.status(200).json({ message: `Item with ID ${_id} is already up to date` });
            } else {
                const updatedItem = await Catalog.findOne({ _id: _id });
                return res.status(200).json({ message: `Updated item with ID ${_id} successfully`, updatedItem });
            }
        }
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ message: 'Error updating item', error: error.message });
    }
});

module.exports = router;
