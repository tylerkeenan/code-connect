const express= require('express');
const app = express();

app.use(express.static(__dirname + "/styles"));

const index = require("./routes/index");

// index route 
app.use('/',index);

//sets ejs as view engine
app.set("view engine", "ejs");

//Start web server - listen to incoming requests on the specified port
app.listen(3000, () => {
  console.log("Server is running at port 3000");
});


let mylist =[];

let createlist = () => {

    mylist = [
       {EmployeeName: "Joy ",
        address: "CSB QUB",
        salary: "£30,000",
        role:"Software Engineer",
        employeeNumber:"001",
},

{
    EmployeeName: "Tyler ",
        address: "CSB QUB",
        salary: "£30,000",
        role:"Software Engineer",
        employeeNumber:"002",

},

{
    EmployeeName: "David",
        address: "CSB QUB",
        salary: "£30,000",
        role:"Software Engineer",
        employeeNumber:"003",

},        
  ]
};

app.get('/admin', (req ,res) =>{

  res.render('admin',{mylist : mylist})

});

createlist();

console.table(mylist);


