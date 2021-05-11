const {deleteUser , getOneUser ,getUsers ,truncUsers ,updateUser} = require("../controller/user");

const router = require("express").Router();


//create user will be handled by the register process in the auth 



//TODO handle the <GET ALL USERS [GET] request> request here

router.route("/app/api/users").get(getUsers);



//TODO handle the <get one user [GET/:id] request> request here

router.route("/app/api/user/:id").get(getOneUser);


//TODO handle the <updateUser [put]> request here

router.route("/app/api/login").put(updateUser);



//TODO handle the <delete one user [DELETE/:ID]> request here

router.route("/app/api/removeUser/:id").delete(deleteUser);




//TODO handle the <trunc users [put]> request here

router.route("/app/api/removeUsers").delete(truncUsers);







module.exports = router;