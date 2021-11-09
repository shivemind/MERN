const StoryController = require('../controllers/story.controller');
module.exports = function(app){
    app.get('/api', StoryController.index);
    app.post('/api/stories', StoryController.createStory);
    app.get('/api/stories', StoryController.getAllStories);
    app.get('/api/stories/:id', StoryController.getStory);
    app.put('/api/stories/:id', StoryController.updateStory);
    app.delete('/api/stories/:id', StoryController.deleteStory);
}