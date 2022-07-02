import "dotenv/config"

//importo path para poder usar __dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PASSWORD = process.env.DB_PASSWORD


export default {
    mongoDB: {
        URL: `mongodb+srv://tomas:${DB_PASSWORD}@cluster0.lefks.mongodb.net/ecommerce?retryWrites=true&w=majority`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    mariaDB: {
        client: "mysql",
        connection: {
            host: "127.0.0.1",
            user: "root",
            password: DB_PASSWORD,
            database: "test"
        },
        pool: { min: 0, max: 10 }
    },
    sqlite: {
        client: "sqlite3",
        connection: {
            filename: (__dirname + "/ecommerce.sqlite")
        },
        useNullAsDefault: true,
    }

}
