import Sequelize, { Model } from 'sequelize';

class Plano extends Model {
    static init(sequelize){
        super.init(
            {
                plano: Sequelize.STRING,
                valor: Sequelize.FLOAT,
            }, {
                sequelize,
                modelName: 'plano',
                underscored: true,
            }
        );        
    }
}

export default Plano;