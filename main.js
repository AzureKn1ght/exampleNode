const product = require("./product");
const express = require("express");

//Define Express functions
server = express();
router = express.Router();

//Define GET URI and function
//Always has request & response params
router.get("/welcome", (request, response) => {
  console.log("GET called");

  //Default is 200, no need status()
  response.status(200).send("HELLO WORLD");
});

server.use(router);

//Start the server
//Port 3000, callback is optional
server.listen(3000, () => {
  console.log("express is running");
});
