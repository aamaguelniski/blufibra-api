import PessoaFisica from '../models/PessoaFisica';

class PessoaFisicaController {
   async store(req, res){

         const exist = await PessoaFisica.findOne({ where: { cpf: req.body.cpf }});

         if (exist) {
            return res.status(400).json({ error: 'Client already exist.'})
         }

         const persona = await PessoaFisica.create(req.body);
      return res.json(persona);
   }
}

export default new PessoaFisicaController();