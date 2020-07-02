import Produto from '../models/Produto';

class ProdutoController {
    //QUERY FUNCTION
    async query(req, res){
        return res.json({ message: 'Em produção' });
    }

    //GET FUNCTION
    async get(req, res){
        return res.json({ message: 'Em produção' });
    }

    //POST FUNCTION
    async store(req, res){
        return res.json({ message: 'Em produção' });
    }

    //DELETE FUNCTION
    async delete(req, res){
        return res.json({ message: 'Em produção' });
    }

    //PUT FUNCTION
    async update(req, res){
        return res.json({ message: 'Em produção' });
    }

}

export default new ProdutoController();