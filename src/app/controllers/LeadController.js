import Lead from '../models/Lead';
import sequelize from 'sequelize';

class LeadController {
    async query(req, res){
        const lead = await Lead.findAll({
            attributes: [ 
                'id',
                'primeiro_nome',
                'ultimo_nome',
                'endereco',
                'referencia',
                'data',
                'telefone',
                'observacoes',
            ],
            include: [{
                model: 'fonte',
                attributes: [ 'descricao' ],
            }]
        });

        return res.json(lead);
    }

    async get(req, res){
        const lead = await Lead.findOne({
            where: {
                id: req.id,
            },
            include: [{
                model: 'fonte',
                attributes: [ 'descricao' ]
            }]
        });

        return res.json(lead);
    }

    async store(req, res){
        const { id, primeiro_nome, ultimo_nome, endereco, data, referencia, telefone, fonte_id, observacoes } 
            = await Lead.create(req.body);

        return res.json({ id, primeiro_nome, ultimo_nome, endereco, data, referencia, telefone, fonte_id, observacoes });
    }
}

export default new LeadController();