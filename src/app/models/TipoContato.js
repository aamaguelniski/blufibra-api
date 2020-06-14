import Sequelize, { Model } from 'sequelize';
import Email from './Email';

class TipoContato extends Model {
    static init(sequelize){
        super.init({
            descricao: Sequelize.STRING,
        }, {
            sequelize,
            modelName: 'tipo_contato',
            underscored: true,
        });


        this.hasMany(Email, { foreignKey: 'tipo_contato_id' });
    }
}

export default TipoContato;