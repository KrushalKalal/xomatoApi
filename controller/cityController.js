const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const City = require('../model/cityModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/cityList',(req,res) => {
    
    City.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;