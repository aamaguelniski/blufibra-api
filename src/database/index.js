import Sequelize from 'sequelize';

import Usuario from '../app/models/Usuario';
import PessoaFisica from '../app/models/PessoaFisica';
import Cliente from '../app/models/Cliente';
import TipoUsuario from '../app/models/TipoUsuario';
import TipoContato from '../app/models/TipoContato';
import Cidade from '../app/models/Cidade';
import Base from '../app/models/Base';
import Endereco from '../app/models/Endereco';
import PessoaJuridica from '../app/models/PessoaJuridica';
import Telefone from '../app/models/Telefone';
import Email from '../app/models/Email';
import Colaborador from '../app/models/Colaborador';
import Plano from '../app/models/Plano';
import Lead from '../app/models/Lead';
import Opportunity from '../app/models/Opportunity';
import Produto from '../app/models/Produto';
import Equipamento from '../app/models/Equipamento'
import Fonte from '../app/models/Fonte';
import TipoColaborador from '../app/models/TipoColaborador';

const models = [Usuario, PessoaFisica, Email, Cliente, TipoUsuario, TipoContato, 
   Cidade, Base, Endereco, PessoaJuridica, Telefone, Colaborador, Plano, Lead, Opportunity,
   Produto, Equipamento, Fonte, TipoColaborador
];

class Database {
   constructor(){
      this.init();
   }

   init(){
      const sequelize = new Sequelize('blufibra-dev', 'postgres', 'A7wQMBgXGTzEQm5L', {
         dialect: 'postgres',
         host: '186.232.154.26',
         define: {
            freezeTableName: true
         }
      });

      models.map(model => model.init(sequelize)); 
   }
}

export default new Database();