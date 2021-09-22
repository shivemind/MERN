const PirateController = require('../controllers/pirate.controller');
module.exports = function(app){
    app.get('/api', PirateController.index);
    app.get('/api/pirate', PirateController.getAllPirates);
    app.post('/api/pirate/create', PirateController.createPirate);
    app.get('/api/pirate/:id', PirateController.getPirate);
    app.put('/api/pirate/:id', PirateController.updatePirate);
    app.delete('/api/pirate/:id', PirateController.deletePirate);
}