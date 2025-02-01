import { Sequelize } from 'sequelize';
import env from '../env.js';

const sequelize = new Sequelize(
  env.db.name,
  env.db.username,
  env.db.password, {
    host: env.db.host,
    dialect: 'mysql',
  }
);

export default sequelize;
