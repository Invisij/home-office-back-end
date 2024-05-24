import express from 'express';
import userController from '../controllers/userController';
import mainCatController from '../controllers/mainCatController';
import subCatController from '../controllers/subCatController';
import discountController from '../controllers/discountController';
import orderController from '../controllers/orderController';
import orderProductController from '../controllers/orderProductController';
import cartController from '../controllers/cartController';
import cartProductController from '../controllers/cartProductController';
import allCodeController from '../controllers/allCodeController';
import productController from '../controllers/productController';

const router = express.Router();

const initWebRoutes = (app) => {
    // Auth
    router.post('/v1/api/login', userController.login);

    router.post('/v1/api/create-user', userController.createUser);
    router.get('/v1/api/read-user', userController.readUser);
    router.put('/v1/api/update-user', userController.updateUser);
    router.delete('/v1/api/delete-user', userController.deleteUser);

    router.post('/v1/api/create-main-cat', mainCatController.createMainCat);
    router.get('/v1/api/read-main-cat', mainCatController.readMainCat);
    router.put('/v1/api/update-main-cat', mainCatController.updateMainCat);
    router.delete('/v1/api/delete-main-cat', mainCatController.deleteMainCat);

    router.post('/v1/api/create-sub-cat', subCatController.createSubCat);
    router.get('/v1/api/read-sub-cat', subCatController.readSubCat);
    router.put('/v1/api/update-sub-cat', subCatController.updateSubCat);
    router.delete('/v1/api/delete-sub-cat', subCatController.deleteSubCat);

    router.post('/v1/api/create-discount', discountController.createDiscount);
    router.get('/v1/api/read-discount', discountController.readDiscount);
    router.put('/v1/api/update-discount', discountController.updateDiscount);
    router.delete('/v1/api/delete-discount', discountController.deleteDiscount);

    router.post('/v1/api/create-order', orderController.createOrder);
    router.get('/v1/api/read-order', orderController.readOrder);
    router.put('/v1/api/update-order', orderController.updateOrder);
    router.delete('/v1/api/delete-order', orderController.deleteOrder);

    router.post('/v1/api/create-order-product', orderProductController.createOrderProduct);
    router.get('/v1/api/read-order-product', orderProductController.readOrderProduct);
    router.put('/v1/api/update-order-product', orderProductController.updateOrderProduct);
    router.delete('/v1/api/delete-order-product', orderProductController.deleteOrderProduct);

    router.post('/v1/api/create-cart', cartController.createCart);
    router.get('/v1/api/read-cart', cartController.readCart);
    router.put('/v1/api/update-cart', cartController.updateCart);
    router.delete('/v1/api/delete-cart', cartController.deleteCart);

    router.post('/v1/api/create-cart-product', cartProductController.createCartProduct);
    router.get('/v1/api/read-cart-product', cartProductController.readCartProduct);
    router.put('/v1/api/update-cart-product', cartProductController.updateCartProduct);
    router.delete('/v1/api/delete-cart-product', cartProductController.deleteCartProduct);

    router.post('/v1/api/create-product', productController.createProduct);
    router.get('/v1/api/read-product', productController.readProduct);
    router.put('/v1/api/update-product', productController.updateProduct);
    router.delete('/v1/api/delete-product', productController.deleteProduct);

    // Get all code
    router.get('/v1/api/get-all-code', allCodeController.getAllCode);

    return app.use('/', router);
};

module.exports = initWebRoutes;
