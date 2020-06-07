import TipoUsuario from '../models/TipoUsuario';

class TipoUsuarioController {
   async store(req, res){

      const exist = await TipoUsuario.findOne({ where: { descricao: req.body.descricao }});

      if (exist) {
         return res.status(400).json({ error: 'User Type already exist.'})
      }

      const tipo = await TipoUsuario.create(req.body);
      return res.json(tipo);
   }
}

export default new TipoUsuarioController();