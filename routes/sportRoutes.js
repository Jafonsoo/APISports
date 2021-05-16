// importing the express library but destructuring just the Router logic
var express = require('express');
var router = express.Router();


const Sport = require("../models/sportModels");
// sport/create
  router.post("/create",  (req, res) => {
    try {
      var sport = new Sport(req.body);
      if (!sport) return res.status(409).send('Os dados já existem.');
      sport.save();
      return res.status(200).send(sport);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });

// sport/edit


//sports/delete


router.get("/delete/{id}", async(req, res) => {
  try {
    const sport = await Sport.deleteOne();
    if (!sport) return res.status(409).send('Dados não apagados.');
    return res.status(200).send(sport);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
})

// sport/list
  router.get("/list", async (req, res) => {
      try {
        // check if any sport person exists 
        const sport = await Sport.find();
        //console.log(sport);
        if (!sport) return res.status(409).send('Dados não criados.');
        return res.status(200).send(sport);
      } catch (err) {
        res.status(500).send('Ocorreu um erro a obter a lista');
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