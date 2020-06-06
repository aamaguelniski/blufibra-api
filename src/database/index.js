import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Usuario from '../app/models/Usuario';
import PessoaFisica from '../app/models/PessoaFisica';
import Cliente from '../app/models/Cliente';
import TipoUsuario from '../app/models/TipoUsuario';
//import Usuario from '../app/models/Usuario';

const models = [Usuario, PessoaFisica, Cliente, TipoUsuario];

class Database {
   constructor(){
      this.init();
   }

   init(){
      this.connection = new Sequelize(databaseConfig);

      models.map(model => model.init(this.connection)); 
   }
}

export default new Database();