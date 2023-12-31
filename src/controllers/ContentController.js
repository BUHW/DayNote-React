const Annotations = require('../models/annotationData');

module.exports = {

    async update(req, res) {
        const { id } = req.params;
        const { title, notes } = req.body;
    
        const annotation = await Annotations.findOne({ _id: id });
    
        if (notes) {
            annotation.notes = notes;
    
            await annotation.save();
        }

        if(title){
            annotation.title = title;

            await annotation.save();
        }
    
        return res.json(annotation);
    }
    

}