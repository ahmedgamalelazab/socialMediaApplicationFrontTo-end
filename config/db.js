const mongoose = require("mongoose");

const dbConnection = async function(){

    try{
        await mongoose.connect(process.env.MONGODB_URI , {useCreateIndex : true , useFindAndModify : true , useNewUrlParser : true, useUnifiedTopology : true,});
        //if all ok 
        console.log("connected successfully to mongodb database");
    }catch(error){
        console.log("failed to connect to mongodb");
    }

}


module.exports = dbConnection;