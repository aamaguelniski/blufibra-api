import Sequelize, { Model } from 'sequelize';

class Cidade extends Model {
    static init(sequelize){
        super.init({
            nome: Sequelize.STRING,
            codigo_ibge: Sequelize.INTEGER,
            uf: Sequelize.STRING,            
        }, {
            sequelize,
            modelName: 'cidade',
            underscored: true,
        });
    }
}

export default Cidade;