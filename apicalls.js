// This is API Version V1 - it uses the path /apicalls/v1/

const express = require("express");
const cors = require("cors");
const router = express.Router();
const bodyParser = require("body-parser");
const axios = require("axios");

router.get("/", function (req, res) {
  // Just redirect them to api-docs (swagger) they seem lost
  res.redirect("/api-docs");
});

async function makeGetRequest() {}

/**
 * @swagger
 * /apicalls/v1/about:
 *  get:
 *    description: This is the PokeJan API - use swagger at the /api-docs extension for more information
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/apicalls/v1/about", (req, res) => {
  res.send("Written by Jan Botha : refer to /api-docs for more information");
});

/**
 * @swagger
 * /apicalls/v1/pokejans:
 *  get:
 *    description: Retrieve the first 100 PokeJans, there are more if you go direct to the original API
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/apicalls/v1/pokejans", (req, res) => {
  axios
    .get(
      "https://" +
        process.env.POKE_HOST +
        process.env.POKE_API +
        "/pokemon?offset=0&limit=1000"
    )
    .then(function (responseAxios) {
      console.log(responseAxios.data);
      res.send(responseAxios.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

/**
 * @swagger
 * /apicalls/v1/pokejan{pokeid}:
 *  get:
 *    description: Getting One PokeJan by specifying the ID of the PokeJan
 *    parameters:
 *      - in: path
 *        name: pokeid
 *        type: integer
 *        required: true
 *        minimum: 1
 *        maximum: 1000
 *        description: Numeric ID of the PokeJan to get ( between 0 and up to 1000).
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/apicalls/v1/pokejan:pokeid", (req, res) => {
  var id = req.params.pokeid;
  if ((id > 1000 && id < 1) || req.params.pokeid == null) {
    console.log(id + " was requested. ( Can only be between 0 and 1000)");
    res.send("PokeJan " + id + " not found");
  } else {
    axios
      .get(
        "https://" +
          process.env.POKE_HOST +
          process.env.POKE_API +
          "/pokemon/" +
          id
      )
      .then(function (responseAxios) {
        console.log(responseAxios.data);
        //res.send("Taahir");
        res.send(responseAxios.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    //res.send("Getting PokeJan: " + id);
  }
});

//------------------------------------------------------------------------------------------------------------
// middleware that is specific to this router
router.use((req, res, next) => {
  //SRE Logginghere
  console.log(Date.now(), " routed ");
  next();
});

function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  console.log(status);
  return err;
}

module.exports = router;
