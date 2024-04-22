import db from '../models';
import CRUDService from '../services/CRUDService';

class HomeController {
    getHomePage = async (req, res) => {
        const data = await db.User.findAll();
        return res.status(200).render('homepage.ejs', {
            data: JSON.stringify(data),
        });
    };
    getAboutPage = (req, res) => {
        return res.status(200).render('test/about.ejs');
    };

    // CRUD user
    createUser = (req, res) => {
        return res.status(200).render('createUser.ejs');
    };
    postUser = async (req, res) => {
        const message = await CRUDService.createNewUser(req.body);
        console.log(message);
        return res.status(201).send('post success');
    };
    readUser = async (req, res) => {
        return res.status(200).render('readUser.ejs', {
            data: await CRUDService.readUser(),
        });
    };
    editUser = async (req, res) => {
        console.log(await CRUDService.editUser(req.query.id));
        return res.status(200).render('editUser.ejs', {
            data: await CRUDService.editUser(req.query.id),
        });
    };
    putUser = async (req, res) => {
        await CRUDService.putUser(req.body);
        return res.status(200).render('readUser.ejs', {
            data: await CRUDService.readUser(),
        });
    };
    deleteUser = async (req, res) => {
        await CRUDService.deleteUser(req.query.id);
        return res.status(200).render('readUser.ejs', {
            data: await CRUDService.readUser(),
        });
    };
}

module.exports = new HomeController();
