import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
require('dotenv').config();
const app = express();

//init middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_APP_FRONTEND_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//init db
connectDB();

//init router
initWebRoutes(app);

//Port === undefined => port = 5000
const port = process.env.PORT || 5000;

app.listen(port, () => {
    //callback
    console.log('Backend Nodejs is running on the port: ' + port);
});
