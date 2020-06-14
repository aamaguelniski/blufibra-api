import Usuario from '../models/Usuario';

class UsuarioController {
   async store(req, res){

      const exist = await Usuario.findOne({ where: { username: req.body.username }});

      if (exist) {
         return res.status(400).json({ error: 'User already exist.'})
      }

      const { id, username, tipo_usuario_id } = await Usuario.create(req.body);
      return res.json({ id, username, tipo_usuario_id });
   }

   async update(req, res){

      const { oldpass } = req.body;
      const user = Usuario.findOne({ where: { id: req.user_id }});

      // VALIDATIONS 
      //---------------------------------------------------------//
      if(req.body.username && req.body.username != user.username){
         const exist = await Usuario.findOne({ where: { username: req.body.username }});

         if(exist){
            return res.status(400).json({ error: 'User already exist.'});
         }
      }  

      if(oldpass && !(await (await user).checkPassword(oldpass))){
         return res.status(400).json({ error: "Password is wrong." });
      }

      // UPDATE USER
      //---------------------------------------------------------//
      const { id, username, tipo_usuario_id } = (await user).update(req.body);      
      return res.json({ id, username, tipo_usuario_id });
   }

   async delete(req, res){
      return res.json({ message: 'Option in production.'});
   }
}

export default new UsuarioController();