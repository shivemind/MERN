const { Story } = require('../models/story.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createStory = (request, response) => {
    const { title, author } = request.body;
    Story.create({
        title,
        author
    })
        .then(story => response.json(story))
        .catch(err => response.json(err));
}
module.exports.getAllStories = (request, response) => {
    Story.find({})
        .then(stories => response.json(stories))
        .catch(err => response.json(err))
}
module.exports.getStory = (request, response) => {
    Story.findOne({_id:request.params.id})
        .then(story => response.json(story))
        .catch(err => response.json(err))
}
module.exports.updateStory = (request, response) => {
    Story.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedStory => response.json(updatedStory))
        .catch(err => response.json(err))
}
module.exports.deleteStory = (request, response) => {
    Story.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}