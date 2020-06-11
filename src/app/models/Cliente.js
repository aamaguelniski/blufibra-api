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

      // Associação de Cliente com Usuario
      // Cada Cliente carrega a ID de seu respectivo Usuario no sistema
      this.belongsTo(Usuario, {foreignKey: 'usuario_id'});

      // Associação de Cliente com PessoaFisca
      // Cada PessoaFisica carrega a ID de seu respectivo cadastro de Cliente
      this.hasMany(PessoaFisica, {foreignKey: 'cliente_id'});

   }
}

export default Cliente;