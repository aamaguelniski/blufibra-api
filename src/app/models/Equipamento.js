import Sequelize, { Model } from 'sequelize';
import Produto from './Produto';
import Opportunity from './Opportunity';

class Equipamento extends Model {
    static init(sequelize){
        super.init(
            {
                // Atributos dos equipamentos 
            }, {
                sequelize,
                modelName: 'equipamento',
                underscored: true,
            }
        );

        // Associação entre Produto e Equipamento
        // Equipamento carrega a FK
        this.hasOne(Produto, { foreignKey: 'produto_id' });

        // Associação entre Equipamento e Opportunity
        // Equipamento carrega a FK
        this.hasOne(Opportunity, { foreignKey: 'oportunity_id' });
    }
}

export default Equipamento;