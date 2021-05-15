// importing the express library but destructuring just the Router logic
const { Router } = require("express");
// create a new router
const router = new Router();
const Sport = require("../models/sportModels");
// sport/create
  router.post("/create", async  (req, res) => {
    try {
      var sport = new Sport(req.body);
      if (!sport) return res.status(409).send('Os dados já existem.');
      sport.save();
      return res.status(200).send(sport);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });
// sport/list
  router.get("/list", async (req, res) => {
      try {
        // check if any sport person exists 
        const sport = await Sport.find();
        //console.log(sport);
        if (!sport) return res.status(409).send('No sports person exists.');
        return res.status(200).send(sport);
      } catch (err) {
        res.status(500).send('Internal Server Error');
      }
  });

  router.get("/search/datacovid",async (req, res) => {
    try {
      const query = req.query;
      // check if any total exists 
      const sport = await Sport.find(query);
      if (!sport) return res.status(409).send('No sports person exists.');
      return res.status(200).send(sport);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });

  router.get("/search/equipa",async (req, res) => {
    try {
      const query = req.query;
      // check if any total exists 
      const sport = await Sport.find(query);
      if (!sport) return res.status(409).send('No sports person exists.');
      return res.status(200).send(sport);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });

  router.get("/search/funcao",async (req, res) => {
    try {
      const query = req.query;
      // check if any total exists 
      const sport = await Sport.find(query);
      if (!sport) return res.status(409).send('No sports person exists.');
      return res.status(200).send(sport);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;