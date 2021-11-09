const { Jar } = require('../models/jar.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createJar = (request, response) => {
    const { story, voice, visual, background } = request.body;
    Jar.create({
        story,
        voice,
        visual,
        background
        
    })
        .then(jar => response.json(jar))
        .catch(err => response.json(err));
}
module.exports.getAllJars = (request, response) => {
    Jar.find({})
        .then(jars => response.json(jars))
        .catch(err => response.json(err))
}
module.exports.getJar = (request, response) => {
    Jar.findOne({_id:request.params.id})
        .then(jar => response.json(jar))
        .catch(err => response.json(err))
}
module.exports.updateJar = (request, response) => {
    Jar.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedJar => response.json(updatedJar))
        .catch(err => response.json(err))
}
module.exports.deleteJar = (request, response) => {
    Jar.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}