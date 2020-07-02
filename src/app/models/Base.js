import Sequelize, { Model } from 'sequelize';
import Cliente from './Cliente';

class Base extends Model {
    static init(sequelize){
        super.init(
            {
                identificacao: Sequelize.STRING,
                endereco: Sequelize.STRING,
                telefone: Sequelize.STRING,
            }, {
                sequelize,
                modelName: 'base',
                underscored: true,
            },
        );

        // ASSOCIATIONS
        //----------------------------------------------------------------------

        // Association between Bases and Clientes;
        // Clientes has the FK field
        this.hasMany(Cliente, {foreignKey: 'base_id'});
    }
}

export default Base;
