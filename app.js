//modules imported here
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require('mongoose');

//mongodb://<dbuser>:<dbpassword>@ds241288.mlab.com:41288/contactlists
//port no
const port = 3000 || process.env.port

const app = express();

//route

const route = require('./routes/route');

//database connection

//if local db:  then
// mongoose.connect("mongodb://localhost:27017/contactlist")
// mongoose.connection.on('connected',(err)=>{
//     if(err){
//         console.log("connection failed"+ err)
//     }
//     console.log("conection successfull")
// })

//if mlab
password = "Jj7205585243!"
mongoose.connect("mongodb://sikukumar:"+password+"@ds241288.mlab.com:41288/contactlists")
    .then(()=>{
    console.log("connected to datatabase");
})
    .catch((e)=>{
    console.log("connection failed",e);
});



//midlleware
app.use(cors());
app.use(bodyparser.json());

//static

app.use(express.static(path.join(__dirname,'public')))

app.use('/api',route);


app.listen(port,()=>{
    console.log("listning at port : " + port)
})


//new aproch
// var express = require('express'),
//     config = require('./server/configure'),
//     app = express();

// app.set('port', process.env.PORT || 3300);
// app.set('views', __dirname + '/views');
// app = config(app);

// app.get('/', function(req, res){
//     res.send('Hello World');
// });
// app.listen(app.get('port'), function(){
//     console.log('Server up: http://localhost:' + app.get('port'));
// });
