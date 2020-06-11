import PessoaJuridica from '../models/PessoaJuridica';

class PessoaJuridicaController {
   async store(req, res){

         const exist = await PessoaJuridica.findOne({ where: { cnpj: req.body.cpf }});

         if (exist) {
            return res.status(400).json({ error: 'Client already exist.'})
         }

         const persona = await PessoaJuridica.create(req.body);
      return res.json(persona);
   }
}

export default new PessoaJuridicaController();