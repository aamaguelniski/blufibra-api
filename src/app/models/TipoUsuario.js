import Sequelize, { Model } from 'sequelize';
import Usuario from './Usuario';

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
      );

      // ASSOCIATIONS
      //----------------------------------------------------------

      // Association between Usuario and TipoUsuario
      // Usuario has the FK field
      //this.hasMany(Usuario, {foreignKey: 'tipo_usuario_id'});    
   };   
}


export default TipoUsuario;