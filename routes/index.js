const user = require("./userRoutes");
const sport = require("./sportRoutes");

// export the routes
module.exports = (app) => {
  app.use("/user", user);
  app.use("/sport", sport);
};