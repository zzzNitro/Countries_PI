const { Router } = require('express');
const { getCountries, getCountriesById } = require('../controllers/countryController')
const axios = require('axios')

const router = Router();
router.get("/", getCountries)
router.get("/:id", getCountriesById)


module.exports = router;