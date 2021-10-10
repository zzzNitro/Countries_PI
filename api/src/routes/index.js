const { Router } = require('express')

// Importar todos los routers;
//const activities = require('./activities')
const countries = require('./countries')

const router = Router()

// Configurar los routers
//router.use('/activities', activities)
router.use('/countries', countries)

module.exports = router