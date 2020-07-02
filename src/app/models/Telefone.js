const sequelize = require("sequelize")

import Sequelize, { Model } from 'sequelize';
import Cliente from './Cliente';
import TipoContato from './TipoContato';

class Telefone extends Model {
    static init(sequelize){
        super.init({
            telefone: Sequelize.STRING
        }, {
            sequelize,
            modelName: 'telefone',
            underscored: true,
        });

        //ASSOCIATIONS
        //----------------------------------------------------------------------

        //Associação entre Telefone e Cliente
        //Telefone carrega a FK
        this.hasOne(Cliente, { foreignKey: 'cliente_id'});

        //Associação entre TipoContato e Telefone
        //Telefone carrega a FK
        this.hasOne(TipoContato, { foreignKey: 'tipo_contato_id' });
    }

}

export default Telefone;