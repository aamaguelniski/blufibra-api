import Telefone from '../models/Telefone';

class TelefoneController {
    async store(req, res){
        return res.json({ message: 'Em produção'});
    }

    async update(req, res){
        return res.json({ message: 'Em produção'});
    }

    async delete(req, res){
        return res.json({ message: 'Em produção'});
    }
}

export default new TelefoneController();