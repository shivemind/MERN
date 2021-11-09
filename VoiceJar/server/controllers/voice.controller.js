const { Voice } = require('../models/voice.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createVoice = (request, response) => {
    const { user, storyPage, voiceFile } = request.body;
    Voice.create({
        user,
        storyPage,
        voiceFile
    })
        .then(voice => response.json(voice))
        .catch(err => response.json(err));
}
module.exports.getAllVoices = (request, response) => {
    Voice.find({})
        .then(voices => response.json(voices))
        .catch(err => response.json(err))
}
module.exports.getVoice = (request, response) => {
    Voice.findOne({_id:request.params.id})
        .then(voice => response.json(voice))
        .catch(err => response.json(err))
}
module.exports.updateVoice = (request, response) => {
    Voice.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedVoice => response.json(updatedVoice))
        .catch(err => response.json(err))
}
module.exports.deleteVoice = (request, response) => {
    Voice.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}