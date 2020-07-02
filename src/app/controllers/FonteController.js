import Fonte from '../models/Fonte';

class FonteController {
    async store(req, res) {
        const exist = await Fonte.findOne({
            where: {
                descricao: req.body.descricao,
            }
        });

        if(exist){
            return res.status(401).json({ error: "Fonte inserida já existe."})
        }

        const { id, descricao, comentario } = await Fonte.create(req.body);

        return res.json({ id, descricao, comentario });
    }
}

export default new FonteController();