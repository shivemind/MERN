const { Story } = require('../models/story.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createStory = (request, response) => {
    const { title, author } = request.body;
    Story.create({
        title, 
        author
    })
    .then(story => response.json(story))
    .catch(err => response.json(err));
}