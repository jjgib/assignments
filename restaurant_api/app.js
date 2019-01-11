const express = require('express');
const bodyParser = require('body-parser');
var {Restaurants} = require('./restaurantModels');
var {mongoose} = require('./mongoose_db');

var app = express();

app.post('/save',(req,res)=>{
    var restaurant = new Restaurants(
        {
            restaurantName:req.body.restaurant_name,
            restaurantAddress:req.body.restaurant_address,
            restaurantContactNumber:req.body.restaurant_number,
            restaurantType:req.body.restaurant_type,
            restaurantRating:req.body.restaurant_rating,
            menu: [{
                itemName:req.body.item_name,
                itemType:req.body.item_type,
                itemAvailability:req.body.availablity,
                itemCost:req.body.item_cost,
                itemAvailabilityTime:req.body.availablity_time
            }]
        }
    );
        restaurant.save().then( (result)=>{
            res.send(result);
        }, (error)=>{
            res.status(400).send(error);
        });

});

//List all restaurants
app.get('/allRestaurants',(req,res)=>{
    Restaurants.find().then( (result)=>{
        res.send(result);
    }, (error)=>{
        res.status(400).send();
    });
});

//Find by id
app.get('/restuarants/:rId',(req,res)=>{
    
});

app.listen(3000, ()=>{
    console.log("Server listening to http://localhost:3000/");
})