import express from 'express';
import userController from '../controllers/userController';
import mainCatController from '../controllers/mainCatController';
import subCatController from '../controllers/subCatController';

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

    // Get all code
    router.get('/v1/api/get-all-code', userController.getAllCode);

    return app.use('/', router);
};

module.exports = initWebRoutes;
