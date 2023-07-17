const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/get", async (req, res) => {
    try {
        const response = await axios.get('https://api.football-data.org/v4/competitions/PL/matches', {
          headers: {
            'X-Auth-Token': "db19664b36804b7b88ccbb63e21efa1e",
          },
        });
    
        const fixtures = response.data.matches;
        res.send(fixtures);
      } catch (error) {
        console.error('An error occurred:', error.response.data);
      }});

module.exports = router;
