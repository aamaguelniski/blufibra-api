import Colaborador from '../models/Colaborador';
import Usuario from '../models/Usuario';
import UsuarioController from '../controllers/UsuarioController';

class ColaboradorController {

  // QUERY FUNCTION
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

  // GET
  async get(req, res){
    const colaborador =  Colaborador.findOne({
      where: {
        id: req.body.id,
      }
    });

    return req.json(colaborador);
  }

  // CREATE
  async post(req, res){
    console.log(req.body);
    // VALIDAÇÕES

    // verifica se usuário já existe
    const userExists = await Usuario.findOne({
      where: {
        username: req.body.username,
      }
    });

    if(userExists){
      return res.status(401).json({ 
        error: 'Usuário já registrado no sistema'
      });
    }

    // //verifica se o telefone já existe
    // const celular = await Colaborador.findOne({
    //   where: {
    //     telefone: req.body.celular,
    //   }
    // });

    // if(celular){
    //   return res.status(401).json({ 
    //     error: 'Um colabordor já está registrado com esse número de telefone.'
    //   })
    // }

    // // verifica se o email já exite
    // const email = await Colaborador.findOne({
    //   where: {
    //     email: req.body.email,
    //   }
    // });

    // if(email){
    //   return res.status(401).json({ 
    //     error: 'Um colaborador já está registrado com esse e-mail.'
    //   })
    // }

    //CRIAÇÃO
    //--------------------------------------------------------------------------

    // cria o usuario
    const user = await UsuarioController.store(req, res);

    if (user){
      // cria colaborador
      const { nome, sobrenome, email, celular } = await Colaborador.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        celular: req.body.celular,
        tipo_colaborador_id: req.body.tipo_colaborador_id });

      if (colaborador){
        return res.json({ username, nome, sobrenome, email, celular });
      } else {
        return res.status(400).json({ error: 'Erro ao criar colaborador' });
      }
    } else {
      return res.status(400).json({ error: 'Erro ao criar usuário' });
    }
  }
}

export default new ColaboradorController();