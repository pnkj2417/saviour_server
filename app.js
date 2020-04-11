var express= require('express'),
mongoose = require('mongoose')
var user=require('./models/user.js')


var app=express()
const port= process.env.PORT|| 8081
app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.set('view engine','ejs');
mongoose.connect('mongodb://user:password@ds033059.mlab.com:33059/saviour_major',{useNewUrlParser: true, useUnifiedTopology : true});


app.post('/home',function(req,res){
   var user1=new user(req.body)
   user1._id=req.body.contact
   user1.save()
});


app.listen(port,function(){
    console.log('Server Started on ' + port);
});