import Sequelize, { Model, Sequelize } from 'sequelize';
import Lead from './Lead';

class Fonte extends Model {
  static init(sequelize){
    super.init(
      {
        descricao: Sequelize.STRING,
        comentario: Sequelize.STRING,
      }, {
        sequelize,
        underscored: true,
        modelName: 'fonte',
      }
    );

    // ASSOCIAÇÕES
    //-------------------------------------------------------

    // Associação entre Lead e Fontes
    // Lead carrega a FK
    this.belongsTo(Lead, { foreignKey: 'fonte_id' });
  }
}

export default Fonte;