import Usuario from '../models/Usuario';
import TipoUsuario from '../models/TipoUsuario';

class UsuarioController {
   async query(req, res){
      const usuarios = Usuario.findAll({
         attributes: ["username"]
      });

      return res.json(usuarios);
   }

   async get(req, res){
      const usuario = Usuario.findOne({
         where: {
            id: req.body.id
         }
      });

      if (usuario){
         return res.json(usuario);
      } else {
         return res.status(400).json({
            error: "Usuário não encontrado"
         });
      }
   }

   async store(req, res){
      console.log(req.body);
      const tipo_usuario = await TipoUsuario.findOne({
         where: {
            id: req.body.tipo_usuario_id
         }
      });

      // Verifica se tipo de usuário existe
      if (!tipo_usuario){
         return res.status(400).json({
            error: 'Tipo de usuário não existe'
         });
      }

      // Verifica se é colaborador (1 = colaborador)
      if (tipo_usuario.id == 1){
         // Verifica se não é consultor de vendas
         if (req.body.tipo_colaborador_id != 3){
            // Verifica se existe usuário logado
            if (!req.body.logged_user_id){
               return res.status(400).json({ 
                  error: 'Necessário estar logado para criar este usuário'
               });
            } else {
               const logged_user = Usuario.findOne({
                  where: {
                     id: logged_user_id
                  }
               });

               // Verifica se usuário logado existe
               if (!logged_user){
                  return res.status(400).json({
                     error: 'Usuário logado não encontrado'
                  });
               }

               // Necessário verificar se usuário é administrador

            }
         }

      }

      const exist = await Usuario.findOne({ where: { username: req.body.username }});

      if (exist) {
         return res.status(400).json({
            error: 'Usuário já existe'
         });
      }

      const { id, username } = await Usuario.create(req.body);
      
      return res.json({ id, username });
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