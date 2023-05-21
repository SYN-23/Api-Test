const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    name: {
        
        type: String,
        required:true,
    },
    email :{
       type:String,
       required:true
    },
    phoneNumber: {
       
        type: Number,
        required:true,
    },
   
})

module.exports = mongoose.model('profile', detailsSchema);