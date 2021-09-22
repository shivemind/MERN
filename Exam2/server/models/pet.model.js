const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    petName: { 
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long."]
    },
    petType: { 
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be at least 3 characters long."]
    },
    petDescription: { 
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters long."]
    },
    skillOne: { 
        type: String,
    },
    skillTwo: { 
        type: String,
    },
    skillThree: { type: String },
    
}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);