const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Option = require('../model/optionModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/collectionList',(req,res) => {
    
    Option.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;