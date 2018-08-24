const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const app = express();

let port = process.env.PORT || 7555;

const server = app.listen(port, () => {
  console.log("Server running on http://localhost: " + port);
});

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Socket
const io = require("socket.io").listen(server);

io.on("connection", (client)=>{
  console.log("a user is connected");
  client.on("disconnect",()=>{
    console.log("user has disconnected");
  });

  client.on("example_message", (msg)=>{
    console.log("message" + msg);
  });
});


//Connects to DB
const db = require("./keys").mongodb.dbURI;
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDb Connected...."))
  .catch(err => console.log(err));

// Showing data from get mongoose
app.use("/api/users", users);

app.use(express.static(__dirname + "/react-client/public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/react-client/public/index.html");
  console.log(request.body.name);
});