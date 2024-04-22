import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
import morgan from 'morgan';
require('dotenv').config();
const app = express();

//init middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//init db
connectDB();

//init router
viewEngine(app);
initWebRoutes(app);

const port = process.env.PORT || 5000;
//Port === undefined => port = 5000

app.listen(port, () => {
    //callback
    console.log('Backend Nodejs is running on the port: ' + port);
});
