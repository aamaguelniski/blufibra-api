import Cliente from '../models/Cliente';
import TipoUsuario from '../models/TipoUsuario';
import Usuario from '../models/Usuario';
import PessoaFisica from '../models/PessoaFisica';
import Telefone from '../models/Telefone';
import Email from '../models/Email';
import Endereco from '../models/Endereco';

class ClienteController {   

   async store(req, res){
      if(req.body.cpf){

         // VALIDAÇÕES
         //----------------------------------------------------------//  
         
         // CPF
         const existPersonCpf = await PessoaFisica.findOne({where: { cpf: req.body.cpf }});
         if(existPersonCpf){
            return res.status(401).json({ error: 'Um cliente já está registrado com esse CPF'});
         }

         // RG
         const existPersonRg = await PessoaFisica.findOne({ where: { rg: req.body.rg }});
         if(existPersonRg) {
            return res.status(401).json({ error: 'Um cliente já está registrado com esse RG'});
         }

         // TELEFONE
         var telefoneCount = 1;
         for(let telefone of Object.entries(req.body.telefone)){

            const existPhone = await Telefone.findOne({ where: { telefone: telefone[telefoneCount].telefone }})
            if (existPhone){
               return res.status(401).json({ error: "Um cliente já está registrado com esse telefone."});
            }
         }

         // EMAIL
         var emailCount = 1;
         for(let email of Object.entries(req.body.email)){

            const existEmail = await Email.findOne({ where: { email: email[emailCount].email }})
            if (existEmail){
               return res.status(401).json({ error: "Um cliente já está registrado com esse telefone."});
            }
         }

         // CRIANDO USUÁRIO DO CLIENTE
         //----------------------------------------------------------//
         const userType = await TipoUsuario.findOne({ where: { descricao: 'Cliente' }});
         const tipo_usuario_id = userType.id;

         const firstName = req.body.primeiro_nome;
         const [ one_name, ,] = firstName.split(" ");
         const one = one_name.toLowerCase();

         const lastName = req.body.ultimo_nome;
         const [two_name, ,] = lastName.split(" ");
         const two = two_name.toLowerCase();

         const username = one + "." + two;
         const password = Math.random().toString(36).substring(7);

         const createUser = { username, password, tipo_usuario_id};

         const existUser = await Usuario.findOne({ where: { username: createUser.username }});
         if (existUser) {
            createUser.username = username + ".REVISAR";
         }

         const user = await Usuario.create(createUser);
         // user = { user.id, user.username, user.passwor, user.tipo_usuario_id }

         // CRIANDO O CLIENTE
         //----------------------------------------------------------//
         const createClient = { usuario_id: user.id, base_id: req.body.base_id };

         const client = await Cliente.create(createClient);
         // client = { client.id, client.usuario_id, client.ativo, client.base_id }

         // CRIANDO A PESSOA FÍSICA DO CLIENTE
         //----------------------------------------------------------//
         const createPerson = {
            primeiro_nome: req.body.primeiro_nome,
            ultimo_nome: req.body.ultimo_nome,
            cpf: req.body.cpf,
            rg: req.body.rg,
            data_nascimento: req.body.data_nascimento,
            nome_pai: req.body.nome_pai,
            nome_mae: req.body.nome_mae,
            cliente_id: client.id
         };

         const person = await PessoaFisica.create(createPerson);
         
         // CRIANDO O ENDERECO DO CLIENTE
         //----------------------------------------------------------//
         const createAddress = {
            endereco: req.body.endereco,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade_id: req.body.cidade_id,
            cep: req.body.cep,
            tipo_contato_id: req.body.tipo_contato_id,
            cliente_id: client.id,
            referencia: req.body.referencia
         };

         const address = await Endereco.create(createAddress);

         // CRIANDO TELEFONES DO CLIENTE
         //----------------------------------------------------------//
         telefoneCount = 1;
         let phone;
         for(let telefone of Object.entries(req.body.telefone)){
            let createPhone = {
               telefone: telefone[telefoneCount].telefone,
               tipo_contato_id: telefone[telefoneCount].tipo_contato_id,
               cliente_id: client.id
            }

            phone = await Telefone.create(createPhone);
         }

         // CRIANDO EMAILS DO CLIENTE
         //----------------------------------------------------------//
         emailCount = 1;
         let mail;
         for(let email of Object.entries(req.body.email)){
            let createEmail = {
               email: email[emailCount].email,
               tipo_contato_id: email[emailCount].tipo_contato_id,
               cliente_id: client.id
            }

            mail = await Email.create(createEmail);
         }

         return res.json(mail);
      } else if (req.body.cnpj){
         //Tratamento de clientes juridicos
      } else {
         return res.status(403).json({ error: "Revise the informations."});
      }
   }
}

export default new ClienteController();