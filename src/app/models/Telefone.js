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

        this.belongsTo(Cliente, { foreignKey: 'cliente_id'});
        this.belongsTo(TipoContato, { foreignKey: 'tipo_contato_id' });
    }

}

export default Telefone;