import Cidade from '../models/Cidade';

class CidadeController {
    async store(req, res){

        const exist = await Cidade.findOne({ where: { codigo_ibge: req.body.codigo_ibge }});
        
        if(exist){
            return res.status(400).json({ error: 'City already exist on database' });
        }
        const cidade = await Cidade.create(req.body);
        
        return res.json(cidade);
    }
}

export default new CidadeController();