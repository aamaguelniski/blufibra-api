import Sequelize, { Model } from "sequelize";

class Usuario extends Model {
   static init(sequelize){
      super.init(
         {
            nome: Sequelize.STRING,
            password_hash: Sequelize.STRING,
         },
         {
            sequelize,
            modelName: 'usuario'
         }
      )
   }
}

export default Usuario;