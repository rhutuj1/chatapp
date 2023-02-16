const express = require("express");
const { resgisterUser } = require("../controllers/userController");


const router = express.Router()
router.route('/').post(resgisterUser)
// router.route('/login').post(authuser)

module.exports = router;