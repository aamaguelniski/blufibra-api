import Telefone from '../models/Telefone';
import {sequelize, transaction} from 'sequelize';

class TelefoneController {
    async store(req, res){
        const exist = await Telefone.findOne({ where: { telefone: req.body.telefone }});
        if(exist){
            return res.status(401).json({ error: 'Um cliente já está registrado com esse telefone'});
        }
        
        const {id, telefone, cliente_id, tipo_contato_id} = await Telefone.create(req.body);
        return res.json({id, telefone, cliente_id, tipo_contato_id});
    }

    async update(req, res){
        const { phoneId } = req.body;
        const exist = await Telefone.findOne({ where: { telefone: req.body.telefone }});
        if(exist){
            return res.status(401).json({ error: 'Um cliente já está registrado com esse telefone'});
        }

        const update = await Telefone.findByPk(phoneId);
        if(!update){
            return res.status(400).json({ error: 'Telefone não encontrado.'});
        }

        const phone = await update.update(req.body);

        return res.json(phone);
    }

    async delete(req, res){
        const { phoneId } = req.body;

        const result = await Telefone.destroy({ where: { id: phoneId }});

        if(result){
            return res.json({ message: 'Successfuly deleted.'});
         } else {
            return res.json({ message: 'Failed to delete.'});
         }

    }
}

export default new TelefoneController();