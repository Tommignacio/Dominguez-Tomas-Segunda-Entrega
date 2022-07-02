import express from 'express';
import MongoClass from '../contenedores/MongoClass.js';
import { productsDao } from '../daos/index.js';
import { cartSchema } from './CartSchema.js';
import mongoose from 'mongoose';
import config from '../config.js';
import { MongoDBProducts } from '../daos/products/MongoDBProducts.js';

const app = express();

export class MongoDBCarts extends MongoClass {
    constructor() {
        super("carritos", cartSchema)
    }

}


const carritos = new MongoDBCarts()
const product = new MongoDBProducts()
//middleware
app.use(express.json());
app.get("/", async (req, res) => {
    res.json(await product.getAll())
})
app.post("/post/:idcarrito", async (req, res) => {
    const producto = req.body
    const { params: { idcarrito }, query: { idproducto } } = req
    const cartEnconmtrado = await carritos.getOne(idcarrito)
    const prodEnconrado = await product.getOne(idproducto)
    cartEnconmtrado.productos.push(prodEnconrado._id)
    cartEnconmtrado.cantidada = cartEnconmtrado.productos.length
    res.json({ mess: "prod agregado", response: cartEnconmtrado })
})
app.get("/crearCarrito", async (req, res) => {
    carritos.create({ productos: [], cantidad: 0 })
    res.json({ msj: "cart crreado" })
})
app.get("/muestracarrito", async (req, res) => {
    res.json(await carritos.getAll())
})

//id carritoa testear 62be62256912be7c7d848a4e

//id prod testear  62be1a14d177a31d453c9693

const PORT = 8080;
app.listen(PORT, () => {
    mongoose.connect(config.mongoDB.URL, config.mongoDB.options);
    console.log(`Server listening on port ${PORT}`);
}
);