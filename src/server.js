import express from 'express';
const app = express();
import router from './routes/indexRoutes.js';
import morgan from 'morgan';

//importo path para poder usar __dirname
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + "/public")); //dirname sirve para que si abro desde otro directoro, siempre encontrara la carpeta publica

//middleware error
const ruteError = async function (req, res, next) {
    //mensaje de error al no existir la ruta
    return res
        .status(404)
        .json({ error: -2, description: `route '${req.originalUrl}' method '${req.method}' not implemented` });
};

//Rutas
app.use("/", router);
app.use("/*", ruteError)

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}
);