import Sequelize, { Model } from 'sequelize';
import Cliente from './Cliente';
import TipoContato from './TipoContato';
import Cidade from './Cidade';

class Endereco extends Model {
   static init(sequelize){
      super.init(
         {
            endereco: Sequelize.STRING,
            numero: Sequelize.INTEGER,
            bairro: Sequelize.STRING,
            referencia: Sequelize.STRING,
            cep: Sequelize.STRING,
         },
         {
            sequelize,
            underscored: true,
            modelName: 'endereco',
         }
      );

      // ASSOCIATIONS
      //------------------------------------------------------------------------

      // Association between Cliente and Endereco
      // Endereco has the FK field
      this.belongsTo(Cliente, {foreignKey: 'cliente_id'});

      // Association between TipoContato and Endereco
      // Endereco has the FK field
      this.belongsTo(TipoContato, {foreignKey: 'tipo_contato_id'});

      // Association between Cidade and Endereco
      // Endereco has the FK field
      this.belongsTo(Cidade, {foreignKey: 'cidade_id'});
   }
}

export default Endereco;