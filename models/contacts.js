var mongoose = require('mongoose');

var ContactsSchema = mongoose.Schema({
  first_name: {
        type: String,
        required:true
  },
  last_name: {
    type: String,
    required:true
},
phone:{
    type:String,
    required:true
}
});

var Contact = mongoose.model('Contact', ContactsSchema);
module.exports = Contact;
