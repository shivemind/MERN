const mongoose = require('mongoose');
const VoiceSchema = new mongoose.Schema({
    user: { type: String },
    storyPage: { type: String },
    voiceFile: { type: String }
}, { timestamps: true });
module.exports.Voice = mongoose.model('Voice', VoiceSchema);