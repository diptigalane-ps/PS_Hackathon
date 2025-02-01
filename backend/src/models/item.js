import { DataTypes 

} from 'sequelize';
import { sequelize } from '../config/database.js';

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

export default Item;
