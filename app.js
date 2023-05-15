const express= require('express');
const app = express();

app.use(express.static(__dirname + "/styles"));


app.use(express.static(__dirname + "/media"));


const index = require("./routes/index");

// index route 
app.use('/',index);

//sets ejs as view engine
app.set("view engine", "ejs");

//Start web server - listen to incoming requests on the specified port
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});