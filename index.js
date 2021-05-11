require('dotenv').config({path : "./config.env"});
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const http = require("http"); //! this body is new in our system 
const cors = require("cors"); //! this body also is new in our system
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
require("./config/db")();
const path = require("path");
//connecting socket io to the tunnel 

app.use(express.static(path.join(__dirname , "./Site1")));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

//!danger new code here examine it 
const io = require("socket.io")(server,{
    cors:
    {
        origin : '*'
    }
});

app.use("/socialApplication",require("./routes/auth"));
app.use("/socialApplication",require("./routes/user"));


io.on("connection",(socket)=>{
    console.log("new connection connected !");
    console.log(socket.id,"has joined");
    socket.on("/newConnection",(message)=>console.log(message));
});
server.listen(port ,"0.0.0.0",()=>console.log(`connected and listening on port : ${port}`));