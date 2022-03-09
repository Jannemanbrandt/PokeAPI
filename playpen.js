const axios = require("axios");

axios
  .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
  .then((resp) => {
    console.log(resp.data);
  });
