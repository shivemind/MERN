const mongoose = require('mongoose');
const StorySchema = new mongoose.Schema({
    title: { type: String },
    author: { type: String }
}, { timestamps: true });
module.exports.Story = mongoose.model('Story', StorySchema);