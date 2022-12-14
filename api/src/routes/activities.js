const { Router } = require('express');
const { newActivity } = require('../controllers/Activity')
const { deleteActivity } = require('../controllers/deleteActivity')
const { Country, Activity } = require("../db");
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

router.get('/', async (req, res) => {
    try {
        const result = await Activity.findAll({ include: { 
            model: Country, 
            attributes: ['name'],
            through: { attributes: [] }}})
        // console.log(result)
        res.status(200).json(result)

    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.delete('/', async (req, res)=>{
    try {
        const {name, countryID} = req.body
    let result = await deleteActivity(name, countryID)
    res.status(200).send(result)
} catch (error) {
    res.status(400).send(error.message)
}
})  

module.exports = router;