const { Router } = require('express');
// Importar todos los routers;
const CountryRouter= require('./countries')
const ActivityRouter= require('./activities')
// Ejemplo: const authRouter = require('./auth.js');
// const axios = require('axios')


const router = Router();
router.use('/countries', CountryRouter);
router.use('/activities', ActivityRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
