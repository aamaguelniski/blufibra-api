import Sequelize, { Model } from 'sequelize';

class Cliente extends Model {
   static init(sequelize){
      super.init(
         {
            endereco: Sequelize.STRING,
            cep: Sequelize.STRING,
            referencia: Sequelize.STRING,
            telefone: Sequelize.STRING,
            email: Sequelize.STRING,
            celular: Sequelize.STRING,
         },
         {
            sequelize,
            modelName: 'cliente'
         }
      )
   }
}

export default Cliente;