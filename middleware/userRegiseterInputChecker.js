//middleware to check the user input if it valid or not 



exports.registerInputNullChecker = async (req,res,next)=>{

        const {userName , userEmail , userPassword} = req.body;

        if(!userName || !userEmail || !userPassword){
            return res.status(400).json({ success : false ,error : true,message: 'you cannot input null values'});
        }

        next();

}