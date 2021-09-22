const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);