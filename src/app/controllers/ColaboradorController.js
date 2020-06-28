import Colaborador from '../models/Colaborador';
import Usuario from '../models/Usuario';
import UsuarioController from '../controllers/UsuarioController';
require('./UsuarioController');

class ColaboradorController {

  // busca específica
  async get(req, res){
    const colaborador =  Colaborador.findAll({
      where: {
        id: req.body.id,
      }
    });

    return req.json(colaborador);
  }

  // busca todos
  async query(req, res){
    const colaborador = Colaborador.findAll({
      attributes: [
        'id', 
        'primeiro_nome',
        'ultimo_nome',
        'telefone',
        'email',
      ]
    });

    return res.json(colaborador);
  }

  //cria um Colaborador
  async post(req, res){

    //VALIDAÇÕES
    //--------------------------------------------------------------------------

    //verifica se usuário já existe
    const existUser = await Usuario.findOne({
      where: {
        username: req.body.username,
      }
    });

    if(existUser){
      return res.status(401).json({ 
        error: 'Usuário já registrado no sistema.'
      });
    }

    //verifica se o telefone já existe
    const telefone = await Colaborador.findOne({
      where: {
        telefone: req.body.telefone,
      }
    });

    if(telefone){
      return res.status(401).json({ 
        error: 'Um colabordor já está registrado com esse número de telefone.'
      })
    }

    // verifica se o email já exite
    const email = await Colaborador.findOne({
      where: {
        email: req.body.email,
      }
    });

    if(email){
      return res.status(401).json({ 
        error: 'Um colaborador já está registrado com esse e-mail.'
      })
    }

    //CRIAÇÃO
    //--------------------------------------------------------------------------

    //cria o usuario
    const usuario = await UsuarioController.store();

    req.body.usuario_id = usuario.id;

  }
}

export default new ColaboradorController();