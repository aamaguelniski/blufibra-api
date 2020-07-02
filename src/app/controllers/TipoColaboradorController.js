import TipoColaborador from '../models/TipoColaborador';

class TipoColaboradorController {
   async query(req, res){
      const tipos_colaborador = await TipoColaborador.findAll({
         attributes: ['id', 'descricao']
      });

      return res.json(tipos_colaborador);
   }

   async get(req, res){
      const tipo_colaborador = await TipoColaborador.findOne({
         where: {
            id: req.id
         }
      });

      return res.json(tipo_colaborador);
   }

   async store(req, res){
      const exist = await TipoColaborador.findOne({ where: { descricao: req.body.descricao }});

      if (exist) {
         return res.status(400).json({ error: 'Tipo de colaborador já existe'})
      }

      const { id, descricao } = await TipoColaborador.create(req.body);
      
      return res.json({ id, descricao });
   }

   async update(req, res){
      const { tipoColaboradorId } = req.body;

      const tipo_colaborador = await TipoColaborador.findByPk(tipoColaboradorId);
      if(!tipo_colaborador){
         return res.status(400).json({ message: 'Tipo de colaborador não encontrado'});
      }
      const { id, descricao } = await tipo_colaborador.update(req.body);

      return res.json({ id, descricao });
   }

   async delete(req, res){
      const { tipoColaboradorId } = req.body;

      const tipo_colaborador = await TipoColaborador.destroy({where: { id: tipoColaboradorId }});

      if(tipo_colaborador){
         return res.json({ message: 'Tipo de colaborador deletado com sucesso'});
      } else {
         return res.json({ message: 'Erro ao deletar tipo de colaborador'});
      }      
   }
}

export default new TipoColaboradorController();