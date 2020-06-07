import Sequelize, { Model, HasMany } from 'sequelize';

class TipoUsuario extends Model {
   static init(sequelize){
      super.init(
         {
            descricao: Sequelize.STRING,
         },
         {
            sequelize,
            underscored: true,
            modelName: 'tipo_usuario'
         }
      )
   };
}

export default TipoUsuario;