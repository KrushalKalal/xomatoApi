let express = require('express');
let app = express();
let morgan = require('morgan');
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 9870;
let mongo = require('mongodb');
let cors = require('cors');
let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser');
let mongoUrl = "mongodb+srv://shoppinghub:shoppinghub123@cluster0.w4byv.mongodb.net/zomato?retryWrites=true&w=majority";
let db;

app.use(morgan('common'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Response from Xomato");

})

app.get('/city',(req,res)=>{
    db.collection('city').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.get('/collection',(req,res)=>{
    db.collection('Option').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.get('/restaurant',(req,res)=>{
    let query = {}
    let cityId = Number(req.query.cityId);
    let optionId = Number(req.query.optionId);
    if(cityId){
        query = {city_id:cityId}
    }else if(optionId){
          query = {"options.option_id":optionId}
     } else {
         query = {}
     }
    db.collection('restaurant').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.get(`/filter/:optionId`,(req,res) => {
    let query = {}
    let sort = {price:1}
    let optionId = Number(req.params.optionId);
    let cuisineId = Number(req.query.cuisineId);
    let discountId = Number(req.query.discountId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    let rating = Number(req.query.rating);
    if(req.query.sort){
        sort={price:req.query.sort}
    }
    if(cuisineId && lcost && hcost && discountId && rating){
        query = {
            "options.option_id": optionId,
            "cuisines.cuisine_id":cuisineId,
            $and:[{price:{$gt:lcost,$lt:hcost}}],
            "discount.discount_id":discountId,
            $and:[{rating:{$gt:rating}}]
        }
    }
    else if(cuisineId){
        query = {
            "options.option_id": optionId,
            "cuisines.cuisine_id":cuisineId
        }
    }else if(lcost && hcost){
        query = {
            "options.option_id": optionId,
            $and:[{price:{$gt:lcost,$lt:hcost}}]
           
        }
    }else if(discountId){
        query = {
            "options.option_id":optionId,
            "discount.discount_id":discountId
        }
    }else if(rating){
        query = {
            "options.option_id":optionId,
            $and:[{rating:{$gt:rating}}]
        }
    }
    else{
        query = {
            "options.option_id": optionId,
        }
    }
    db.collection('restaurant').find(query).sort(sort).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })

})

app.get('/details/:id',(req,res) => {
    let id = Number(req.params.id)
    db.collection('restaurant').find({restaurant_id:id}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

MongoClient.connect(mongoUrl, (err,client)=> {
    if(err){console.log("Error While Connecting")}
    else{
        db = client.db('zomato');
        app.listen(port, ()=> {
            console.log(`Listening on port ${port}`)
        })
    }
})