import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    router.get('/crud', homeController.getCRUDPage);
    router.post('/post-crud', homeController.postCRUDPage);

    return app.use('/', router);
};

module.exports = initWebRoutes;
