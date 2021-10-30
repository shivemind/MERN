const StoryController = require('../controllers/story.controller');
module.exports = function(app){
    app.get('/api', StoryController.index);
    app.post('/api/stories', StoryController.createStory);
}