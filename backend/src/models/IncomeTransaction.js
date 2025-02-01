// models/IncomeTransaction.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database';
import User from './User';
import IncomeCategory from './IncomeCategory';

const IncomeTransaction = sequelize.define('IncomeTransaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  income_category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: IncomeCategory,
      key: 'id',
    },
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  created_by: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: false,
});

User.hasMany(IncomeTransaction, { foreignKey: 'user_id' });
IncomeTransaction.belongsTo(User, { foreignKey: 'user_id' });

IncomeCategory.hasMany(IncomeTransaction, { foreignKey: 'income_category_id' });
IncomeTransaction.belongsTo(IncomeCategory, { foreignKey: 'income_category_id' });

module.exports = IncomeTransaction;
