// models/IncomeCategory.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const IncomeCategory = sequelize.define('Income_Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
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

export default IncomeCategory;
