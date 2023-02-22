const express = require("express");

const sequelize = require("./util/database");
const bodyParser = require("body-parser");

const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoutes = require("./routes/user");
app.use(userRoutes);



//app.use("/user", userRoutes);

sequelize
  .sync()
  .then((result) => {
    //console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
//app.listen(3000);