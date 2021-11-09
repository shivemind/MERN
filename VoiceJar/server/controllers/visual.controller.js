const { Visual } = require('../models/visual.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createVisual = (request, response) => {
    const { name, content } = request.body;
    Voice.create({
        name,
        content
        
    })
        .then(visual => response.json(visual))
        .catch(err => response.json(err));
}
module.exports.getAllVisuals = (request, response) => {
    Visuals.find({})
        .then(visuals => response.json(visuals))
        .catch(err => response.json(err))
}
module.exports.getVisual = (request, response) => {
    Visual.findOne({_id:request.params.id})
        .then(visual => response.json(visual))
        .catch(err => response.json(err))
}
module.exports.updateVisual = (request, response) => {
    Visual.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedVisual => response.json(updatedVisual))
        .catch(err => response.json(err))
}
module.exports.deleteVisual = (request, response) => {
    Visual.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}