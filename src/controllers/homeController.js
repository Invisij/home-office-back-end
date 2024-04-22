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
    getCRUDPage = (req, res) => {
        return res.status(200).render('crud.ejs');
    };
    postCRUDPage = async (req, res) => {
        const message = await CRUDService.createNewUser(req.body);
        console.log(message);
        return res.status(201).send('post');
    };
}

module.exports = new HomeController();
