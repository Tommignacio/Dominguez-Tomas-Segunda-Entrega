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
    // case 'firebase':
    //     import('./productos/FirebaseProductos.js').then(({ FirebaseProductos }) => {
    //         productosDao = new FirebaseProductos();
    //     })
    //     import('./carritos/FirebaseCarrito.js').then(({ FirebaseCarrito }) => {
    //         carritosDao = new FirebaseCarrito();
    //     })
    //     break;
    default:
        throw new Error("It's in default (No DB provided)");

}

export { productsDao, cartsDao };