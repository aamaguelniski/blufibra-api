import Sequelize, { Model } from 'sequelize';
import Colaborador from './Colaborador';

class TipoColaborador extends Model {
   static init(sequelize){
      super.init(
         {
            descricao: Sequelize.STRING,
         },
         {
            sequelize,
            underscored: true,
            modelName: 'tipo_colaborador'
         }
      );

      // ASSOCIATIONS
      //----------------------------------------------------------

      // Association between Usuario and TipoUsuario
      // Usuario has the FK field
      this.hasMany(Colaborador, {foreignKey: 'tipo_colaborador_id'});   
   };   
}


export default TipoColaborador;