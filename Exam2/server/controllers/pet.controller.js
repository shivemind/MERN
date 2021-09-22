const { Pet } = require('../models/pet.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPet = (request, response) => {
    const { petName, petType, petDescription, skillOne, skillTwo, skillThree} = request.body;
    Pet.create({
        petName, 
        petType, 
        petDescription, 
        skillOne, 
        skillTwo, 
        skillThree, 
        

    })
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPets = (request, response) => {
    Pet.find({})
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.status(400).json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}

