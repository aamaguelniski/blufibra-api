import Sequelize, { Model } from 'sequelize';
import Cliente from '../models/Cliente';

class PessoaFisica extends Model {
   static init(sequelize){
      super.init(
         {
            primeiro_nome: Sequelize.STRING,
            ultimo_nome: Sequelize.STRING,
            cpf: Sequelize.STRING,
            rg: Sequelize.STRING,
            data_nascimento: Sequelize.DATE,
            nome_pai: Sequelize.STRING,
            nome_mae: Sequelize.STRING
         },
         {
            sequelize,
            underscored: true,
            modelName: 'pessoa_fisica'
         }
      );

   }
}

export default PessoaFisica;