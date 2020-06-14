import TipoContato from '../models/TipoContato';

class TipoContatoController {
   async store(req, res){

      const { id, descricao } = await TipoContato.create(req.body);
      return res.json({ id, descricao });
   }

   async update(req, res){
      const { contactTypeId } = req.body;

      const tipocontato = await TipoContato.findByPk(contactTypeId);

      if(!tipocontato){
         return res.status(400).json({ message: 'Contact Type not found.'});
      }

      const { id, descricao } = await tipocontato.update(req.body);

      return res.json({ id, descricao });
   }

   async delete(req, res){
      const { contactTypeId } = req.body;

      const result = await TipoContato.destroy({where: { id: contactTypeId }});

      if(result){
         return res.json({ message: 'Successfuly deleted.'});
      } else {
         return res.json({ message: 'Failed to delete.'});
      }
   }
}

export default new TipoContatoController();