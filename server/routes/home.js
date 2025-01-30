import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const homeRouter = express.Router();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

homeRouter.get('', (req, res) => {

    res.redirect('/home')
})

homeRouter.get('/home', (req, res) => {

    res.render('home.ejs')
} )

homeRouter.get('/services', (req, res) => {

    res.render('services.ejs')
} )

homeRouter.get('/wallet', (req, res) => {

    res.render('popup.ejs')
} )

homeRouter.get('/about-us', (req, res) => {

    res.render('about.ejs')
} )

homeRouter.get('/booking1', (req, res) => {

    res.render('booking1.ejs')
} )

homeRouter.get('/booking2', (req, res) => {

    res.render('booking2.ejs')
} )
export default homeRouter;
