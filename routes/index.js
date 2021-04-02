// const mongoose = require("mongoose");
// const Offer = mongoose.model("offers");
// const constructionTypes = mongoose.model("constructionTypes");
// const userModel = mongoose.model("User");
// const { SECRET, COOKIE_NAME } = require("../config");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const authService = require("../authService");

// module.exports = (app) => {
//   console.log("test");
//   app.post("/add-offer", (req, res, next) => {
//     Offer.create(req.body, (err, newOffer) => {
//       console.log(err);
//       console.log(newOffer);
//       res.send(newOffer);
//     });
//   });
// };

// module.exports = (app) => {
  
// };

// module.exports = (app) => {
//   app.post("/register", (req, res, next) => {
//     userModel.create(req.body, (err, userDetails) => {
//       console.log(userDetails);
//       res.send(userDetails);
//     });
//   });
// };

// // module.exports = (app) => {
// //   app.post('/login', (req, res, next) => {
// //     const { email, password } = req.body;

// //     let user = userModel.findOne({ email })
// //           .then(currentUser => {
// //             if(!currentUser){
// //               throw new Error('No such user!')
// //             }

// //             let areEqual = bcrypt.compare(password, currentUser.password)

// //             if(!areEqual){
// //               throw new Error('Invalid password!')
// //             }

// //             let token = jwt.sign({ _id: currentUser._id, email: currentUser.email }, SECRET)
// //             const jt =
// //             res.cookie(COOKIE_NAME, token)

// //             next();
// //           })
// //           .catch(err => console.log(err))

// //   })
// // }
// module.exports = (app) => {
//   app.post("/login", (req, res, next) => {
//     const { email, password } = req.body;
//     authService
//       .login(email, password)
//       .then((token) => {
//         //   res.cookie(COOKIE_NAME, token, { httpOnly: true });
//         // next()
//         res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//         res.cookie(COOKIE_NAME, token, {
//           maxAge: 9000000000,
//           httpOnly: true,
//         });
//         // res.append('Set-Cookie', COOKIE_NAME + token + ';');
//         res.json(token);
//         // next()
//       })
//       .catch((err) => {
//         next(err);
//       });
//   });
// };
