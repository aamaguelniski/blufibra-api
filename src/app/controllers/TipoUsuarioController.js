import TipoUsuario from '../models/TipoUsuario';

class TipoUsuarioController {
   async query(req, res){
      const tipos_usuario = await TipoUsuario.findAll({
         attributes: ['id', 'descricao']
      });

      return res.json(tipos_usuario);
   }

   async get(req, res){
      const tipo_usuario = await TipoUsuario.findOne({
         where: {
            id: req.id
         }
      });

      return res.json(tipo_usuario);
   }

   async store(req, res){
      const exist = await TipoUsuario.findOne({ where: { descricao: req.body.descricao }});

      if (exist) {
         return res.status(400).json({ error: 'User Type already exist.'})
      }

      const { id, descricao } = await TipoUsuario.create(req.body);
      return res.json({ id, descricao });
   }

   async update(req, res){
      const { userTypeId } = req.body;

      const usertype = await TipoUsuario.findByPk(userTypeId);
      if(!usertype){
         return res.status(400).json({ message: 'User Type not found.'});
      }
      const { id, descricao } = await usertype.update(req.body);

      return res.json({ id, descricao });
   }

   async delete(req, res){
      const { userTypeId } = req.body;

      const result = await TipoUsuario.destroy({where: { id: userTypeId }});

      if(result){
         return res.json({ message: 'Successfully deleted.'});
      } else {
         return res.json({ message: 'Failed to delete.'});
      }      
   }
}

export default new TipoUsuarioController();