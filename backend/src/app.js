import express from "express";
import { sequelize } from "./config/database.js";
import itemRoutes from './routes/itemRoutes.js';

const app = express();

app.use(express.json());
app.use('/api', itemRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
