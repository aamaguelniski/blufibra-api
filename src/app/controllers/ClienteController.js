import Cliente from '../models/Cliente';

class ClienteController {
   async store(req, res){

         const exist = await Cliente.findOne({ where: { telefone: req.body.telefone, email: req.body.email, celular: req.body.celular }});

         if (exist) {
            return res.status(400).json({ error: 'Já existe um Cliente com os dados informados.'})
         }

         const cliente = await Cliente.create(req.body);
      return res.json(cliente);
   }
}

export default new ClienteController();