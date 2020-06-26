import Sequelize, { Model } from 'sequelize';
import Usuario from './Usuario';

class Colaborador extends Model {
    static init(sequelize){
        super.init(
            {
                primeiro_nome: Sequelize.STRING,
                ultimo_nome: Sequelize.STRING,
                email: Sequelize.STRING,
                telefone: Sequelize.STRING,
            }, {
                sequelize,
                underscored: true,
                modelName: 'colaboradore'
            }
        );

        // ASSOCIAÇÕES
        //-------------------------------------------------------

        // Associação entre Usuário e Colaborador
        // Colaborador carrega a FK
        this.hasOne(Usuario, { foreignKey: 'usuario_id' });
    }
}

export default Colaborador;