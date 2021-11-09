const JarController = require('../controllers/jar.controller');
module.exports = function(app){
    app.get('/api/jar', JarController.index);
    app.post('/api/jars', JarController.createJar);
    app.get('/api/jars', JarController.getAllJars);
    app.get('/api/jars/:id', JarController.getJar);
    app.put('/api/jars/:id', JarController.updateJar);
    app.delete('/api/jars/:id', JarController.deleteJar);
}