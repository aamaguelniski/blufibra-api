import Usuario from '../models/Usuario';

class UsuarioController {
   async store(req, res){

         const exist = await Usuario.findOne({ where: { username: req.body.username }});

         if (exist) {
            return res.status(400).json({ error: 'User already exist.'})
         }

         const persona = await Usuario.create(req.body);
      return res.json(persona);
   }
}

export default new UsuarioController();