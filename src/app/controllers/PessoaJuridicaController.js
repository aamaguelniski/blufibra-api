import PessoaJuridica from '../models/PessoaJuridica';

class PessoaJuridicaController {
   async store(req, res){

         const exist = await PessoaJuridica.findOne({ where: { cnpj: req.body.cnpj }});

         if (exist) {
            return res.status(400).json({ error: 'Client already exist.'})
         }

         const { id, razao_social, nome_fantasia, cnpj, ie, cliente_id } = await PessoaJuridica.create(req.body);
      return res.json({ id, razao_social, nome_fantasia, cnpj, ie, cliente_id });
   }

   async update(req, res){
      const { legalPersonId } = req.body;

      const legalperson = await PessoaJuridica.findByPk(legalPersonId);

      // VALIDATIONS 
      //---------------------------------------------------------//
      if(!legalperson){
         return res.status(400).json({ error: 'Legal Person not found.'});
      }

      if(req.body.cnpj){
         const exist = await PessoaJuridica.findOne({ where: { cnpj: req.body.cnpj }});

         if(exist){
            return res.status(401).json({ error: 'Legal Person already exist.'})
         }
      }

      if(req.body.ie){
         const exist = await PessoaJuridica.findOne({ where: { ie: req.body.ie }});

         if(exist){
            return res.status(401).json({ error: 'Legal Person already exist.'})
         }
      }

      // UPDATE LEGAL PERSON
      //---------------------------------------------------------//
      const { id, razao_social, nome_fantasia, cnpj, ie, cliente_id } = await legalperson.update(req.body);

      return res.json({ id, razao_social, nome_fantasia, cnpj, ie, cliente_id });
   }

   async delete(req, res){
      const { legalPersonId } = req.body;

      const result = await PessoaJuridica.destroy({ where: { id: legalPersonId }});

      if(result){
         return res.json({ message: 'Successfuly deleted.'});
      } else {
         return res.json({ message: 'Failed to delete.'});
      }
   }
}

export default new PessoaJuridicaController();