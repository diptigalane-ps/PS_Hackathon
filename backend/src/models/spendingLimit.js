// models/SpendingLimit.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.js';
import ExpenseCategory from './expenseCategory.js';

const SpendingLimit = sequelize.define('Spending_Limit', {
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
  expense_category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: ExpenseCategory,
      key: 'id',
    },
  },
  spending_limit: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
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

User.hasMany(SpendingLimit, { foreignKey: 'user_id' });
SpendingLimit.belongsTo(User, { foreignKey: 'user_id' });

ExpenseCategory.hasMany(SpendingLimit, { foreignKey: 'expense_category_id' });
SpendingLimit.belongsTo(ExpenseCategory, { foreignKey: 'expense_category_id' });

export default SpendingLimit;
