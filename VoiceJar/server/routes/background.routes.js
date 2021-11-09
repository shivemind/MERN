const BackgroundController = require('../controllers/Background.controller');
module.exports = function(app){
    app.get('/api', BackgroundController.index);
    app.post('/api/backgrounds', BackgroundController.createBackground);
    app.get('/api/backgrounds', BackgroundController.getAllBackgrounds);
    app.get('/api/backgrounds/:id', BackgroundController.getBackground);
    app.put('/api/backgrounds/:id', BackgroundController.updateBackground);
    app.delete('/api/backgrounds/:id', BackgroundController.deleteBackground);
}