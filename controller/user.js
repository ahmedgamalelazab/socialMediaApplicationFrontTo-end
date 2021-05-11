//TODO handle user <get all users [GET]> 


exports.getUsers = async (req, res, next) => {

    res.json({
        "message": "hello from get all users"
    });

}


//TODO handle user <get one user [GET/:ID]> 


exports.getOneUser = async (req, res, next) => {

    res.json({
        "message": "hello from fetching one user"
    });

}


//TODO handle user <update user [put]> 


exports.updateUser = async (req, res, next) => {

    res.json({
        "message": "hello from update users"
    });

}


//TODO handle user <[DELETE/:ID] HERE> 

exports.deleteUser = async (req, res, next) => {

    res.json({
        "message": "hello from delete user"
    });

}

//TODO handle user <[DELETE] HERE> 

exports.truncUsers = async (req, res, next) => {

    res.json({
        "message": "hello from trunc Users"
    });

}

//! this is new code here is dealing with users to get them and add futures to them like follow and so on ! 


