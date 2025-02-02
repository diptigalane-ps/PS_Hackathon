import express from "express";
import sequelize from "./config/database.js";
import routes from './routes/index.js';
import cors from 'cors';
import env from "./env.js";

const app = express();

const corsOptions = {
  origin: env.app.url,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', routes);

const PORT = env.app.port || 3000;
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
