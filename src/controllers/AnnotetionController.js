const Annotations = require('../models/annotationData');


module.exports = {

    async read(req, res){

        const annotationList = await Annotations.find();

        return res.json(annotationList);
    },
    
    async create(req,res){
        const {title, notes, priority} = req.body;
        
        if(!notes || !title){
            return res.status(400).json({ error: "Nexessário um titulo/anotação" })
        }

        const annotationCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return res.send(annotationCreated);
    },

    async delete(req, res){
        const { id } = req.params;

        const annotetionDeleted = await Annotations.findOneAndDelete( { _id: id } );

        if(annotetionDeleted){
            return res.json(annotetionDeleted);
        }

        return res.status(401).json({ error: 'Não foi encontrado o resgistro para deletar!' });
    }
}