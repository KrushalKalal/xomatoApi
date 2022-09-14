const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Menu = require('../model/menuModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/menu/:id',(req,res) => {
    let id = Number(req.params.id)
    Menu.find({restaurant_id:id},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

router.post('/menuItem',(req,res) => {
    if(Array.isArray(req.body.id)){
     Menu.find({menu_id:{$in:req.body.id}},(err,data) => {
           if(err) throw err;
           res.send(data)
       })
   }else{
       res.send("Invalid input");  
    }
})


module.exports = router;