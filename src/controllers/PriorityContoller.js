const Annotations = require('../models/annotationData');

module.exports = {

    async read(req, res){
        const priority = req.query;

        const priorityNotes = await Annotations.find(priority);

        return res.json(priorityNotes);
    },

    async update(req, res){
        const { id } = req.params;

        const annotetion = await Annotations.findOne({ _id: id });

        if (annotetion.priority){
            annotetion.priority = false;
        } else {
            annotetion.priority = true;
        }

        await annotetion.save();

        return res.json(annotetion);
    }

}