import Sequelize, { Model } from 'sequelize';
import Lead from './Lead';
import Cliente from './Cliente';
import Plano from './Plano';

class Opportunity extends Model {
    static init(sequelize){
        super.init(
            {
                data_instalação: Sequelize.DATE,
                status: Sequelize.STRING,
                observacoes: Sequelize.STRING,
            }, {
                sequelize,
                modelName: 'oportunitie',
                underscored: true,
            }
        );

        // ASSOCIAÇÕES
        //-------------------------------------------------------

        // Associação entre Oportunity e Lead
        // Oportunity carrega a FK
        this.hasOne(Lead, { foreignKey: 'lead_id'});

        // Associação entre Oportunity e Cliente
        // Oportunity carrega a FK
        this.hasOne(Cliente, {foreignKey: 'cliente_id'});

        // Associação entre Oportunity e Plano
        // Oportunity carrega a FK
        this.hasOne(Plano, {foreignKey: 'plano_id'});
    }
}

export default Opportunity;