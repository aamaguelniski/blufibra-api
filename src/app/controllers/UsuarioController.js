import Usuario from '../models/Usuario';
import TipoUsuario from '../models/TipoUsuario';

class UsuarioController {
   async store(req, res){
      const tipo_usuario = await TipoUsuario.findOne({
         where: {
            id: tipo_usuario_id
         }
      });

      // Verifica se tipo de usuário existe
      if (!tipo_usuario){
         return res.status(400).json({
            error: 'Tipo de usuário não existe'
         });
      }

      // Verifica se é cliente (7 = cliente)
      if (tipo_usuario.id != 7){
         const logged_user_id = req.body.logged_uer_id;

         // Verifica se a requisição possui usuário
         if (!logged_user_id){
            return res.status(400).json({
               error: 'Necessário estar logado para criar este usuário'
            });
         } else {
            const logged_user = Usuario.findOne({
               where: {
                  id: logged_user_id
               }
            });

            // Verifica se usuário existe
            if (!logged_user){
               return res.status(400).json({
                  error: 'Usuário logado não existe'
               });
            }

            // Verifica se é administrador do sistema
            if (logged_user.tipo_usuario_id != 4){
               return res.status(400).json({
                  error: 'Usuário logado não é administrador'
               });
            }
         }
      }

      const exist = await Usuario.findOne({ where: { username: req.body.username }});

      if (exist) {
         return res.status(400).json({ error: 'Usuário já existe'});
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