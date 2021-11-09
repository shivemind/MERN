const mongoose = require('mongoose');
const BackgroundSchema = new mongoose.Schema({
    name: { type: String },
    content: { type: String }
}, { timestamps: true });
module.exports.Background = mongoose.model('Background', BackgroundSchema);