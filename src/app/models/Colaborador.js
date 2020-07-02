import Sequelize, { Model } from 'sequelize';
import Usuario from './Usuario';

class Colaborador extends Model {
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                sobrenome: Sequelize.STRING,
                email: Sequelize.STRING,
                celular: Sequelize.STRING,
            }, {
                sequelize,
                underscored: true,
                modelName: 'colaborador'
            }
        );

        // ASSOCIAÇÕES
        //----------------------------------------------------------------------

        // Associação entre Usuário e Colaborador
        // Colaborador carrega a FK
        this.belongsTo(Usuario, { foreignKey: 'usuario_id' });
    }
}

export default Colaborador;