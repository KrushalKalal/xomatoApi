let express = require('express');
let app = express();

const mongoose = require('mongoose');

let morgan = require('morgan');
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 9870;
const hostname = 'localhost';
let cors = require('cors');
let bodyParser = require('body-parser');
const superagent = require('superagent');
const request = require('request');
let mongoUrl = process.env.MongoLiveURL;

app.use(morgan('common'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

const AuthController = require('./controller/authController');
app.use('/api/auth',AuthController);

const CityController = require('./controller/cityController');
app.use('/api',CityController)

const RestaurantController = require('./controller/restaurantController');
app.use('/api',RestaurantController)

const OptionController = require('./controller/optionController');
app.use('/api',OptionController)

const MenuController = require('./controller/menuController');
app.use('/api',MenuController)

const OrderController = require('./controller/orderController');
app.use('/api',OrderController)



mongoose.connect(mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    });
}).catch(err => {
    console.log(err);
})