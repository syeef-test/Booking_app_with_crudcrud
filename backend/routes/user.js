const express = require('express');

const userController = require('../controllers/userController');


const router = express.Router();



router.post('/add_user',userController.postAdduser);
router.get('/get_user',userController.getGetuser);
router.delete('/delete_user/:userid',userController.deleteUser);





module.exports = router;