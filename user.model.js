// user.model.js
const mongoose = require('mongoose');

const User = mongoose.model('User', {
    id: { type: String, unique: true, required: true },
    name: String
});

module.exports = User;
