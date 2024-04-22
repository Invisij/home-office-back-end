import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    // crud user
    router.get('/read-user', homeController.readUser);
    router.get('/create-user', homeController.createUser);
    router.post('/post-user', homeController.postUser);
    router.get('/edit-user', homeController.editUser);
    router.post('/put-user', homeController.putUser);
    router.get('/delete-user', homeController.deleteUser);

    // Auth
    router.post('/v1/api/login', userController.login);

    return app.use('/', router);
};

module.exports = initWebRoutes;
