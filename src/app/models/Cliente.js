import Sequelize, { Model } from 'sequelize';
import Usuario from './Usuario';
import PessoaFisica from './PessoaFisica';

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
      );

      // ASSOCIATIONS
      //----------------------------------------------------------

      // Association between Cliente and Usuario
      // Cliente has the FK field
      this.belongsTo(Usuario, {foreignKey: 'usuario_id'});

      // Association between Cliente and PessoaFisica
      // PessoaFisica has the FK field
      this.hasMany(PessoaFisica, {foreignKey: 'cliente_id'});

   }
}

export default Cliente;