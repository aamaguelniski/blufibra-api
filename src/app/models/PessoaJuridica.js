import Sequelize, { Model } from "sequelize";

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
      )
   }
}

export default PessoaJuridica;