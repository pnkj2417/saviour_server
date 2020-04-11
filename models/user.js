var mongoose =require('mongoose')
var Schema=mongoose.Schema;

var userSchema = new Schema({
    userName: String,
    _id:String,
    age:String,
    status:String
});

const user=mongoose.model('userSchema',userSchema)

module.exports=user