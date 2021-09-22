const { Pirate } = require('../models/pirate.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPirate = (request, response) => {
    const { pirateName, imageUrl, numberOfChests, pirateCatchPhrase, crewPosition, pegLeg, eyePatch, hookHand} = request.body;
    Pirate.create({
        pirateName, 
        imageUrl, 
        numberOfChests, 
        pirateCatchPhrase, 
        crewPosition, 
        pegLeg, 
        eyePatch, 
        hookHand

    })
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPirates = (request, response) => {
    Pirate.find({})
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err))
}

module.exports.getPirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err))
}

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then(updatedPirate => response.json(updatedPirate))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}

