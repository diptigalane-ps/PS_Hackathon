import { config } from "dotenv";
config();

const env = {
    app: {
        url: process.env.APP_URL,
        port: process.env.PORT
    },
    db: {
        name: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST
    },
    auth: {
        domain: process.env.AUTH0_DOMAIN
    },
    genAi: {
        key: process.env.GEMINI_KEY,
        modal: process.env.GEMINI_MODAL
    }
}

export default env;