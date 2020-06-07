import Sequelize, { Model } from 'sequelize';

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
      )
   }
}

export default Endereco;