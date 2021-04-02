const mongoose = require("mongoose");
const Offer = mongoose.model("offers");
const constructionTypes = mongoose.model("constructionTypes");
const userModel = mongoose.model("User");
const {  COOKIE_NAME } = require("../config");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const authService = require("../authService");

function test(app) {
    app.post("https://lc-brokers.herokuapp.com/add-types", (req, res, next) => {
        constructionTypes.create(req.body, (err, types) => {
          console.log(types);
          res.send(types);
        });
      });

  app.post("https://lc-brokers.herokuapp.com/register", (req, res, next) => {
    req.send(req.body)
    userModel.create(req.body, (err, userDetails) => {
      console.log(userDetails);
      res.send(userDetails);
    });
  });

  app.post("https://lc-brokers.herokuapp.com/login", (req, res, next) => {
    const { email, password } = req.body;
    authService
      .login(email, password)
      .then((token) => {
        //   res.cookie(COOKIE_NAME, token, { httpOnly: true });
        // next()
        // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        // res.cookie(COOKIE_NAME, token, {
        //   maxAge: 9000000000,
        //   httpOnly: true,
        // });
        res.send({"token": token})
        // res.append('Set-Cookie', COOKIE_NAME + token + ';');
        // res.json(token);
        // next()
      })
      .catch((err) => {
        next(err);
      });
  });

  app.post("https://lc-brokers.herokuapp.com/add-offer", (req, res, next) => {
    console.log(req.body);
    // res.send(req.body);
    Offer.create(req.body, (err, newOffer) => {
      console.log(err);
      console.log(newOffer);
      res.send(newOffer);
    });
  });



  app.post('https://lc-brokers.herokuapp.com/delete', (req, res, next) => {
      let data = req.body
      console.log(data)
    return  Offer.deleteOne({_id: data._id})
                .then(response => res.send(response))
        
  })

  app.post('https://lc-brokers.herokuapp.com/edit-offer', (req, res, next) => {
      let data = req.body;

      return Offer.updateOne({_id: data._id}, data)
                .then(response => res.send(response))
  })

  app.get('https://lc-brokers.herokuapp.com/clearCookie', (req, res, next) => {
      res.clearCookie(COOKIE_NAME)
      next();
  })

  app.get('https://lc-brokers.herokuapp.com/allOffers', (req, res, next) => {
  return Offer.find({})
            .then(response => res.send(response))
            
  })
}

module.exports = test;
