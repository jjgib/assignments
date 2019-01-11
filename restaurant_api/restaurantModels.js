var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var menuSchema = new Schema({
    itemName:{
        type:String
    },
    itemType:{
        type:String
    },
    itemAvailability:{
        type:String
    },
    itemCost:{
        type:String
    },
    itemAvailabilityTime:{
        type:String
    }
});
var Restaurants = mongoose.model('Restaurants',{
    restaurantName:{
        type:String
    },
    restaurantAddress:{
        type:String
    },
    restaurantContactNumber:{
        type:String
    },
    restaurantType:{
        type:String
    },
    restaurantRating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    menu:[menuSchema]
});
module.exports = {Restaurants}