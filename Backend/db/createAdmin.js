const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {password} = require('../config/adminPassword.js')
const AdminLogin = require('../models/adminLoginSchema.js')

const createAdminUser = async () => {
    const existingAdmin = await AdminLogin.findOne({ username: 'nimo' });
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new AdminLogin({ username: 'nimo', password: hashedPassword });
        await newAdmin.save();
        console.log('Admin user created with username: nimo ');
    } else {
        console.log('Admin user already exists');
    }
};

module.exports = createAdminUser