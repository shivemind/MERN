const mongoose = require('mongoose');
const JarSchema = new mongoose.Schema({
    Story: { type: String },
    Visual: { type: String },
    Voice: { type: String }
}, { timestamps: true });
module.exports.Jar = mongoose.model('Jar', JarSchema);