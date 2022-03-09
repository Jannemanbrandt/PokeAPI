//author  : Jan botha
// Description
// My Pokemon app App
//   Tasks TODO:
//       - LOGGING use zipkins / splunk ?
//       - Ci / CD github actions
//       - testing framework - https://openbase.com/js/jest
//   Tasks DONE:
//      - Swagger
//      - read from Variables

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const port = process.env.MYAPI_PORT; // Reading from the .ENV

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "PokeJan API",
      description: "PokeJan API Information",
      contact: {
        name: "PokeJan",
      },
      //servers: ["http://localhost:3046"],
      servers: ["http://localhost:" + process.env.MYAPI_PORT],
    },
  },
  // ['.routes/*.js']
  apis: ["apicalls.js", "index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// My API Calls will live here
const myapicalls = require("./apicalls");
//Enabling my API calls
app.use(cors("/"), myapicalls);

app.listen(port, () => {
  console.log("");
  console.log("");
  console.log("API can be reached on port " + port);
  console.log("-----------------------------------");
  console.log("");
  console.log("");
});
