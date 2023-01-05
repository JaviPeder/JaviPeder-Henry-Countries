const { Router } = require('express');
const { getAllCountries } = require('../controllers/AllCountries')
const { CountryById } = require('../controllers/CountryById')

const router = Router();

router.get('/', async (req, res) => {
    try {
        let { name } = req.query;
        const result = await getAllCountries(name);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
});
router.get('/:idPais', async (req, res) => {
    const countryId = req.params.idPais.toUpperCase()
    try {
        let result = await CountryById(countryId);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;