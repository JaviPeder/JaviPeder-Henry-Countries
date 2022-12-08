const { Router } = require('express');
const { getAllCountries } = require('../controllers/AllCountries')
const { CountryById } = require('../controllers/CountryById')

const router= Router();

router.get('/', getAllCountries );
router.get('/:idPais', CountryById );

module.exports = router;