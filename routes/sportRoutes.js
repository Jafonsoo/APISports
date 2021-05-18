// importing the express library but destructuring just the Router logic
var express = require('express');
var router = express.Router();


const Sport = require("../models/sportModels");

// sport/create
  router.post("/create",  (req, res) => {
    try {
      var sport = new Sport(req.body);
      if (!sport){
        
        return res.status(409).send('Verifique a ligação.');

      }
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
        if (!sport){
           return res.status(409).send('No sports person exists.');
        }
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
      if (!sport){
         return res.status(409).send('No person was infected in this day exists.');
      }
      return res.status(200).send(sport);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });

  router.get("/search/nacionalidade",async (req, res) => {
    try {
      const query = req.query;
      // check if any total exists 
      const sport = await Sport.find(query);
      if (!sport) {
        return res.status(409).send('No person with this nationality exists.');
      }
      return res.status(200).send(sport);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });

  router.get("/search/name",async (req, res) => {
    try {
      const query = req.query;
      // check if any total exists 
      const sport = await Sport.find(query);
      if (!sport) {
        return res.status(409).send('No person with this name exists.');
      }
      return res.status(200).send(sport);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });

  router.get("/search/estadoatual",async (req, res) => {
    try {
      const query = req.query;
      // check if any total exists 
      const sport = await Sport.find(query);
      if (!sport){
         return res.status(409).send('No person in this state exists.');
      }
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
      if (!sport) return res.status(409).send('No person in team exists.');
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
      if (!sport) return res.status(409).send('No person with this function exists.');
      return res.status(200).send(sport);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;