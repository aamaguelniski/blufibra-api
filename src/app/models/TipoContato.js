import Sequelize, { Model } from 'sequelize';

class TipoContato extends Model {
    static init(sequelize){
        super.init({
            descricao: Sequelize.STRING,
        }, {
            sequelize,
            modelName: 'tipo_contato',
            underscored: true,
        });
    }
}

export default TipoContato;