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
            modelName: 'usuario'
         }
      );

      // Associação de PessoaJuridica com Cliente
      // Cada PessoasJuridica carrega a ID de seu respectivo cadastro de Cliente
      this.hasOne(Cliente, {foreignKey: 'cliente_id'});
   }
}

export default PessoaJuridica;