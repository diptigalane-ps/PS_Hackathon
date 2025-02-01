// models/User.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING(10),
  },
  dob: {
    type: DataTypes.DATE,
  },
  email_id: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone_no: {
    type: DataTypes.STRING(15),
  },
  marital_status: {
    type: DataTypes.STRING(20),
  },
  address: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
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

export default User;
