/*                         ****FACTORY****
Elige cual daos importar dependiendo la base de datos a utilizar
*/
import dotenv from 'dotenv';
dotenv.config();
let productsDao;
let cartsDao;

switch (process.env.DB_NAME) {
    case 'mongoDB':
        import('./products/MongoDBProducts.js')
            .then(({ MongoDBProducts }) => {
                productsDao = new MongoDBProducts();
            })
        import('./carts/MongoDBCarts.js')
            .then(({ MongoDBCarts }) => {
                cartsDao = new MongoDBCarts();
            })
        break;
    case 'firebase':
        import('./products/FirebaseProducts.js')
            .then(({ FirebaseProducts }) => {
                productsDao = new FirebaseProducts();
            })
        import('./carts/FirebaseCarts.js')
            .then(({ FirebaseCarts }) => {
                cartsDao = new FirebaseCarts();
            })
        break;
    default:
        throw new Error("It's in default (No DB provided)");

}

export { productsDao, cartsDao };