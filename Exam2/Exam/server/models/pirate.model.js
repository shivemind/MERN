const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    pirateName: { 
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 characters long."]
    },
    imageUrl: { 
        type: String,
        required: [true, "URL is required"],
        minlength: [3, "URL must be at least 3 characters long."]
    },
    numberOfChests: { 
        type: Number,
        required: [true, "number is required"],
    },
    pirateCatchPhrase: { 
        type: String,
        required: [true, "Phrase is required"],
        minlength: [3, "Phrase must be at least 3 characters long."]
    },
    crewPosition: { 
        type: String,
        required: [true, "Position is required"],
    },
    pegLeg: { type: String },
    eyePatch: { type: String },
    hookHand: { type: String },
}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);