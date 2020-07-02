import Email from '../models/Email';

class EmailController {
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

export default new EmailController();