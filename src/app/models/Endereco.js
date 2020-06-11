import Sequelize, { Model } from 'sequelize';
import Cliente from './Cliente';

class Endereco extends Model {
   static inti(sequelize){
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
            modelName: 'cliente',
         }
      );

      // Associação de Endereço com Cliente
      // Cada Endereço carrega o ID do seu respectivo Cliente
      this.hasOne(Cliente, {foreignKey: 'cliente_id'});
   }
}

export default Endereco;