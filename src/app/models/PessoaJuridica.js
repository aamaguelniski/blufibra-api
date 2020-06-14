import Sequelize, { Model } from "sequelize";
import Cliente from "./Cliente";

class PessoaJuridica extends Model {
   static init(sequelize){
      super.init(
         {
            razao_social: Sequelize.STRING,
            nome_fantasia: Sequelize.STRING,
            cnpj: Sequelize.STRING,
            ie: Sequelize.STRING,            
         },
         {
            sequelize,
            underscored: true,
            modelName: 'pessoa_juridica'
         }
      );

      // ASSOCIATIONS
      //----------------------------------------------------------

      // Association between Cliente and PessoaJuridica
      // PessoaJuridica has the FK field
      this.belongsTo(Cliente, {foreignKey: 'cliente_id'});
   }
}

export default PessoaJuridica;