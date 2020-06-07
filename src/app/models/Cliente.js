import Sequelize, { Model } from 'sequelize';

class Cliente extends Model {
   static init(sequelize){
      super.init(
         {
            ativo: Sequelize.BOOLEAN,
         },
         {
            sequelize,
            underscored: true,
            modelName: 'cliente'
         }
      )
   }
}

export default Cliente;