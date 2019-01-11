var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/FoodZone',{useNewUrlParser:true});

module.exports = {
    mongoose:mongoose
}