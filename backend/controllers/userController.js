const User = require("../models/user");

const response = require("../util/message");

exports.postAdduser = (req, res, next) => {
  console.log(req.body);
  const username = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

  User.create({
    name: username,
    email: email,
    phone: phone,
  })
    .then((result) => {
      //console.log(result);
      res.setHeader("Content-Type", "application/json");
      res.status(201).end(JSON.stringify({ id:result.id,name:result.name, email: result.email, phone: result.phone }));
      
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getGetuser = (req, res, next) => {
  User.findAll()
    .then((users) => {
      if(users.length !== 0){
        res.setHeader("Content-Type", "application/json");
        res.status(200).end(JSON.stringify(users));
      }else{
        res.setHeader("Content-Type", "application/json");
        res.end();
      }
      
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.userid;
  User
    .destroy({
      where: {
        id: userId,
      },
    })
    .then((deletedRecord)=>{
      if (deletedRecord === 1) {
        res.status(200).json({ message: "Deleted successfully" });
      } else {
        res.status(404).json({ message: "record not found" });
      }
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};
