const { Background } = require('../models/background.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createBackground = (request, response) => {
    const { name, content } = request.body;
    Background.create({
        name,
        content
    })
        .then(background => response.json(background))
        .catch(err => response.json(err));
}
module.exports.getAllBackgrounds = (request, response) => {
    Background.find({})
        .then(background => response.json(background))
        .catch(err => response.json(err))
}
module.exports.getBackground = (request, response) => {
    Background.findOne({_id:request.params.id})
        .then(background => response.json(background))
        .catch(err => response.json(err))
}
module.exports.updateBackground = (request, response) => {
    Background.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedBackground => response.json(updatedBackground))
        .catch(err => response.json(err))
}
module.exports.deleteBackground = (request, response) => {
    Background.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}