import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

const initWebRoutes = (app) => {
    // Auth
    router.post('/v1/api/login', userController.login);

    // Dashboard
    router.post('/v1/api/create-user', userController.createUser);
    router.get('/v1/api/read-user', userController.readUser);
    router.put('/v1/api/update-user', userController.updateUser);
    router.delete('/v1/api/delete-user', userController.deleteUser);

    // Get all code
    router.get('/v1/api/get-all-code', userController.getAllCode);

    // Images
    router.get('v1/api/images', userController.getImages);
    router.post('v1/api/upload', userController.postImages);

    return app.use('/', router);
};

module.exports = initWebRoutes;
