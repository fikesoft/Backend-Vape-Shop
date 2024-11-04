const mongoose = require('mongoose');

const loginAdminsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const AdminLogin = mongoose.model('login-admins', loginAdminsSchema);

module.exports = AdminLogin;