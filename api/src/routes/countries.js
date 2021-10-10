const { Router } = require('express');
const { getCountries } = require('../controllers/countryController')
const axios = require('axios')

const router = Router();
router.get("/", getCountries);


module.exports = router;