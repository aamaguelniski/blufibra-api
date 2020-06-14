import Cliente from '../models/Cliente';
import e from 'express';

class ClienteController {
   async store(req, res){
      if(res.body.cpf){
         //Tratamento de clientes físicos
      } else if (req.body.cnpj){
         //Tratamento de clientes juridicos
      } else {
         return res.status(403).json({ error: "Revise the informations."});
      }
   }
}

export default new ClienteController();