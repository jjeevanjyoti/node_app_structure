const express = require("express");
var router = express.Router();

const Contact = require('../models/contacts');

//get all contacts
router.get("/contacts",(req,res,next)=>{
    Contact.find({}, function(err, users) {
        if (err) throw err;
        // object of all the users
        res.json({data:users})
    });
})

//add contact
router.post("/contact",(req,res,next)=>{
    let newContact = new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    })
    Contact.find({first_name:req.body.first_name}, function(err, users) {
        if (err) throw err;
        // object of all the users
        if(users==[]){
            newContact.save((err,contacts)=>{
                if (err) throw err;
                res.json({"msg":"contact added successfully"})
                console.log("contact added successfully")

            })
        }else{
            res.json({"msg":"user  already exit "})
            console.log("user  already exit")

        }
    });
   
})

//delete contact
router.delete("/contact/:id",(req,res,next)=>{
    var id = req.params.id;
    Contact.deleteOne({_id: id}, function(err, obj) {
        if (err) throw err;
        res.json({"msg":"contact deleted successfully"})
        console.log("contact deleted successfully")
      });
})


router.put("/contact/:id",(req,res,next)=>{
    var id = req.params.id;
    Contact.updateOne({ _id: id}, req.body, function (err, result) {
        res.send(
            (err === null) ? {msg: 'data successfully updated'} : {msg: err}
        );
        console.log("data successfully updated")

    });

})


module.exports = router;