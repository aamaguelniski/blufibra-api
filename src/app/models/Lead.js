import Sequelize, { Model } from 'sequelize';

class Lead extends Model {
    static init(sequelize){
        super.init(
            {
                primeiro_nome: Sequelize.STRING,
                ultimo_nome: Sequelize.STRING,
                endereco: Sequelize.STRING,
                telefone: Sequelize.STRING,
                data: Sequelize.DATE,
                referencia: Sequelize.STRING,
                observacoes: Sequelize.STRING,
            }, {
                sequelize,
                underscored: true,
                modelName: 'lead',
            }
        );
    }
}

export default Lead;