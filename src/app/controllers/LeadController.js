import Lead from '../models/Lead';
import sequelize from 'sequelize';

class LeadController {

    //QUERY FUNCTION
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

    //GET FUNCTION
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

    //POST FUNCTION
    async store(req, res){
        const { 
            id, 
            primeiro_nome, 
            ultimo_nome, 
            endereco, 
            data, 
            referencia, 
            telefone, 
            fonte_id, 
            observacoes 
        } = await Lead.create(req.body);

        return res.json(
            { 
                id, 
                primeiro_nome, 
                ultimo_nome, 
                endereco, 
                data, 
                referencia, 
                telefone, 
                fonte_id, 
                observacoes 
            });
    }

    //PUT FUNCTION
    async update(req, res){
        const leadId = req.body;

        const update = await Lead.findByPk(leadId);

        if(!update){
            return res.status(400).json({ error: "Lead para alteração não encotrada." });
        }

        const { 
            id, 
            primeiro_nome, 
            ultimo_nome, 
            endereco, 
            data, 
            referencia, 
            telefone, 
            fonte_id, 
            observacoes 
        } = await update.update(req.body);

        return res.json({ 
            id, 
            primeiro_nome, 
            ultimo_nome, 
            endereco, 
            data, 
            referencia, 
            telefone, 
            fonte_id, 
            observacoes 
        });
    };

    //DELETE FUNCTION
    async delete(req, res){
        const leadId = req.body;

        const result = await Lead.destroy({ where: { id: leadId } });

        if(result){
            return res.json({ message: 'Lead excluida com sucesso.' });
         } else {
            return res.json({ message: 'Erro ao excluir a Lead.' });
         }
    }
}

export default new LeadController();