const { Router } = require('express');
const { newActivity } = require('../controllers/Activity')
const router= Router();

router.post('/', async (req, res)=>{
    try {
    const { name, difficulty, duration, season, countryID } = req.body;
    let result = await newActivity(name, difficulty, duration, season, countryID)
    res.status(200).send({result})
} catch (error) {
    res.status(400).send(error.message)
}
})  


module.exports = router;