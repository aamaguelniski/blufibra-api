import PessoaFisica from '../models/PessoaFisica';

class PessoaFisicaController {
   async store(req, res){

      const exist = await PessoaFisica.findOne({ where: { cpf: req.body.cpf }});

      if (exist) {
         return res.status(400).json({ error: 'Client already exist.'})
      }

      const { id, primeiro_nome, ultimo_nome, cpf, rg, data_nascimento, nome_pai, nome_mae, cliente_id } = await PessoaFisica.create(req.body);
      return res.json({ id, primeiro_nome, ultimo_nome, cpf, rg, data_nascimento, nome_pai, nome_mae, cliente_id });
   }

   async update(req, res){
      const { personId } = req.body;

      const person = await PessoaFisica.findByPk(personId);

      // VALIDATIONS
      //---------------------------------------------------------//
      if(!person){
         return res.status(401).json({ error: 'Person not found.'});
      }

      if(req.body.cpf){
         const exist = await PessoaFisica.findOne({ where: { cpf: req.body.cpf }});

         if(exist){
            return res.status(400).json({ message: 'Person already exist.'});
         }
      }

      if(req.body.rg){
         const exist = await PessoaFisica.findOne({ where: { rg: req.body.rg }});

         if(exist){
            return res.status(400).json({ message: 'Person already exist.'});
         }
      }

      // UPDATE PERSON
      //---------------------------------------------------------//
      const { id, primeiro_nome, ultimo_nome, cpf, rg, data_nascimento, nome_pai, nome_mae, cliente_id } = await person.update(req.body);
      return res.json({ id, primeiro_nome, ultimo_nome, cpf, rg, data_nascimento, nome_pai, nome_mae, cliente_id });
   }

   async delete(req, res){
      const { personId } = req.body;

      const result = await PessoaFisica.destroy({ where: { id: personId }});

      if(result){
         return res.json({ message: 'Successfuly deleted.'});
      } else {
         return res.json({ message: 'Failed to delete.'});
      }
   }
}

export default new PessoaFisicaController();