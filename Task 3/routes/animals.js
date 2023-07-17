const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/get", async (req, res) => {
  try {
    const response = await axios.get("https://cat-fact.herokuapp.com/facts");
    const data = response.data;
    console.log(data);
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
