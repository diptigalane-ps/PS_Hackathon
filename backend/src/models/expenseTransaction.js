// models/ExpenseTransaction.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.js';
import ExpenseCategory from './expenseCategory.js';

const ExpenseTransaction = sequelize.define('Expense_Transaction', {
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

User.hasMany(ExpenseTransaction, { foreignKey: 'user_id' });
ExpenseTransaction.belongsTo(User, { foreignKey: 'user_id' });

ExpenseCategory.hasMany(ExpenseTransaction, { foreignKey: 'expense_category_id' });
ExpenseTransaction.belongsTo(ExpenseCategory, { foreignKey: 'expense_category_id' });

export default ExpenseTransaction;
