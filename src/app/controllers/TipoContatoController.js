import TipoContato from '../models/TipoContato';

class TipoContatoController {
   async store(req, res){

      const tipo_contato = await TipoContato.create(req.body);
      return res.json(tipo_contato);
   }
}

export default new TipoContatoController();