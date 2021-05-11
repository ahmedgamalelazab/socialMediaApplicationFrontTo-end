const bcrypt = require("bcrypt");
//TODO create user module here having this futures 
//profile-picture
//cover-picture
//followers
//followings
//isAdmin

const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
        userName: {
            type: mongoose.Schema.Types.String,
            required: [true, "pleas provide a userName"],
            min: 3,
            max: 50,
        },
        userEmail: {
            type: mongoose.Schema.Types.String,
            required: [true, "u cannot continue without userEmail"],
            min: 5,
            max: 150,
        },
        userPassword: {
            type: mongoose.Schema.Types.String,
            required: [true, "pleas provide a userPassword"],
            min: 5,
            max: 150, // data base level 
        },
        profilePicture: {
            type: mongoose.Schema.Types.String,
            default: "",
        },
        coverPicture: {
            type: mongoose.Schema.Types.String,
            default: "",
        },
        followers: {
            type: mongoose.Schema.Types.Array,
            default: [],
        },
        following: {
            type: mongoose.Schema.Types.Array,
            default: [],
        },
        isAdmin: {
            type: mongoose.Schema.Types.Boolean,
            default: false,
        }
    },
    //this is to make the timestamp of the moment that the user got created or updated to get updated too
    {
        timestamps: true
    }

)


//! BEFORE SAVING THE OBJECT IN THE DATA BASE WE WANNA MAINTAIN THE DATA FOR A WHILE 
UserSchema.pre("save", async function (next) {
    if (!this.isModified('userPassword')) {
        next();
    }
    const salt = await bcrypt.genSalt(15);
    this.userPassword = await bcrypt.hash(this.userPassword, salt);
    next();
});


const User = mongoose.model("users", UserSchema);


module.exports = {
    UserSchema: UserSchema,
    User: User,
}