const product = require("./product");
const express = require("express");
const cors = require("cors");
//const body_parser = require("body-parser");

//Define Express functions
server = express();
server.use(express.json()); //body_parser deprecated
server.use(cors());

//Define GET URI and function
//Always has request & response params
// router.get("/welcome", (request, response) => {
//   console.log("GET called");

//   //Default is 200, no need status()
//   response.status(200).send("HELLO WORLD");
// });

//server.use(router);
server.use(product.router);

//Start the server
//Port 3000, callback is optional
server.listen(3000, () => {
  console.log("express is running");
});
