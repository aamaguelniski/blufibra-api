import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
    static init(sequelize){
        super.init(
            {
                descricao: Sequelize.STRING,
                estoque: Sequelize.INTEGER,
                valor_custo: Sequelize.FLOAT,
                valor_venda: Sequelize.FLOAT,
            }, {
                sequelize,
                modelName: 'produto',
                underscored: true,
            }
        );
    }
}

export default Produto;