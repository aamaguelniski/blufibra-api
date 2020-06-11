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

      // Associação de TipoUsuario com Usuario
      // Cada Usuario carrega o ID do seu TipoUsuario
      this.hasMany(Usuario, {foreignKey: 'tipo_usuario_id'});    
   };   
}


export default TipoUsuario;