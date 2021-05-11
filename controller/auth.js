const {User} = require("../models/user");

//TODO handle user <REQUEST HERE> 


exports.registerUser = async (req, res, next) => {
    //this route is being protected by a special middleware 
    //the middleware checking the user null inputs and return statusCode 500 as badRequest 
    const {userName , userEmail , userPassword} = req.body;
   try{
        //the same query in sql find user in users table where email address = 'something@something.com'
        let user = await User.findOne({userEmail : userEmail});

        if(user){
            return res.status(400).json({ message: 'this Email registered already!' });
        }

        user = await User.create({
            userName : userName,
            userEmail : userEmail,
            userPassword : userPassword,
        })

        //if all are ok 

        //FIXME !this code have to get maintained because i will not accept users without verify their own emails via their own registering emails 

        return res.send(201).json({ success: true,data : user,error : false });

   }catch(error){
        return res.status(500).json({ message: error });
   }
}


//TODO handle user <REQUEST HERE> 


exports.verifyUser = async (req, res, next) => {

    res.json({
        "message": "hello from verifying users"
    });

}


//TODO handle user <REQUEST HERE> 


exports.loginUser = async (req, res, next) => {

    res.json({
        "message": "hello from Login users"
    });

}


//TODO handle user <REQUEST HERE> 



exports.forgetPassword = async (req, res, next) => {

    res.json({
        "message": "hello from forgetPassword users"
    });

}

exports.resetPassword = async (req, res, next) => {

    res.json({
        "message": "hello from resetPassword users"
    });

}

//! this is new code here is dealing with users to get them and add futures to them like follow and so on ! 


