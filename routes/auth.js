const {forgetPassword , loginUser , registerUser ,resetPassword ,verifyUser } = require("../controller/auth");

const {registerInputNullChecker} = require("../middleware/userRegiseterInputChecker");


const router = require("express").Router();



//TODO handle the <register [post] request> request here

router.route("/app/api/register").post(registerInputNullChecker,registerUser);



//TODO handle the <verify account [GET] request> request here

router.route("/app/api/verifyPassword").get(verifyUser);


//TODO handle the <login [post]> request here

router.route("/app/api/login").post(loginUser);



//TODO handle the <forgetPassword [POST]> request here

router.route("/app/api/forgetPassword").post(forgetPassword);




//TODO handle the <resetPassword [put]> request here

router.route("/app/api/resetPassword/:userResetPasswordToken").put(resetPassword);







module.exports = router;