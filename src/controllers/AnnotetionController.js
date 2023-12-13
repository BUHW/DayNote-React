const Annotations = require('../models/annotationData')

module.exports = {
    
    create(req,res){
        const {title, notes, priority} = req.body;
        
        console.log(title);
        console.log(notes);
        console.log(priority);
    }

}