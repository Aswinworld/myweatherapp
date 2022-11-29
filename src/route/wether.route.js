const express = require('express')
const Whether = require("../controller/controller")

const router =  express.Router();
router.get('/home',Whether.login)
router.post('/wether',Whether.weather);

module.exports = router;


