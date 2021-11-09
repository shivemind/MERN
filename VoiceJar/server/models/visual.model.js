const mongoose = require('mongoose');
const VisualSchema = new mongoose.Schema({
    name: { type: String },
    content: { type: String },
}, { timestamps: true });
module.exports.Visual = mongoose.model('Visual', VisualSchema);