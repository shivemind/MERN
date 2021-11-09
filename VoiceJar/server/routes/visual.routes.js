const VisualController = require('../controllers/visual.controller');
module.exports = function(app){
    app.get('/api/visual', VisualController.index);
    app.post('/api/visuals', VisualController.createVisual);
    app.get('/api/visuals', VisualController.getAllVisuals);
    app.get('/api/visuals/:id', VisualController.getVisual);
    app.put('/api/visuals/:id', VisualController.updateVisual);
    app.delete('/api/visuals/:id', VisualController.deleteVisual);
}