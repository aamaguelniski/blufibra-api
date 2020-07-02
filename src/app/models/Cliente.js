import Sequelize, { Model } from 'sequelize';
import Usuario from './Usuario';
import PessoaFisica from './PessoaFisica';
import Email from './Email';

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
      //------------------------------------------------------------------------

      // Association between Cliente and Usuario
      // Cliente has the FK field
      this.hasOne(Usuario, {foreignKey: 'usuario_id'});

      // Association between Cliente and PessoaFisica
      // PessoaFisica has the FK field
      this.hasMany(PessoaFisica, {foreignKey: 'cliente_id'});

      // Association between Cliente and Email
      // Email has the FK field
      this.hasMany(Email, { foreignKey: 'cliente_id'});
   }
}

export default Cliente;