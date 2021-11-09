const VoiceController = require('../controllers/voice.controller');
module.exports = function(app){
    app.get('/api/voice', VoiceController.index);
    app.post('/api/voices', VoiceController.createVoice);
    app.get('/api/voices', VoiceController.getAllVoices);
    app.get('/api/voices/:id', VoiceController.getVoice);
    app.put('/api/voices/:id', VoiceController.updateVoice);
    app.delete('/api/voices/:id', VoiceController.deleteVoice);
}