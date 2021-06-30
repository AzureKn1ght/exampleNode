//Example for MySQL connections

//CONNECTING TO THE MYSQL SERVER
const mysql = require("mysql");
const properties = {
  host: "34.126.172.116",
  user: "root",
  password: "fintechsglab",
  port: 3306,
  database: "market",
};
var connection = mysql.createConnection(properties);
//callback func optional, but we can use it to print errors
connection.connect((error) => {
  if (error) {
    console.error("Connection failed! \n" + error);
  } else {
    console.log("MySQL connection successful!");
  }
});

//NOW WE ARE READY TO QUERY THE DATABASE!
/*connection.query("select * from products", (error, results) => {
  if (error) console.error(error);
  else console.log(results); //returns an array of dictionary
  //e.g. we can access results[0].name
});*/

var q = (x) => {
  connection.query(x, (error, results) => {
    if (error) console.error(error);
    else console.log(results);
  });
};

module.exports = {
  connection,
  q,
};
