import Usuario from '../models/Usuario'

export default async (req, res, next) => {

  //VALIDAÇÕES
  //----------------------------------------------------------------------------

  // Verifica se tipo de usuário existe
  const tipo_usuario = await TipoUsuario.findOne({
      where: {
        id: tipo_usuario_id
      }
  });
  
  if (!tipo_usuario){
      return res.status(400).json({
        error: 'Tipo de usuário não existe.',
      });
  }

  // Verifica se o usuario nãe é do tipo cliente (7)
  if (tipo_usuario.id != 7){
    const logged_user_id = req.body.logged_user_id;

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

  //verifica se o usuário a ser criado já existe no sistema
  const exist = await Usuario.findOne({ 
    where: { 
      username: req.body.username 
    }
  });

  if (exist) {
      return res.status(400).json({ error: 'Usuário já existe'});
  }

  //cria o usuário
  const { id, username, tipo_usuario_id } = await Usuario.create(req.body);
  req.usuario_id = id;

  return next;
}