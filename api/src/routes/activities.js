const { Router } = require('express');
const { newActivity } = require('../controllers/Activity')
const { deleteActivity } = require('../controllers/deleteActivity')
const { updateActivity } = require('../controllers/updateActivity')
const { Country, Activity } = require("../db");
const router= Router();

router.post('/', async (req, res)=>{
    try {
    const { name, difficulty, duration, season, countryID, description } = req.body;
    let result = await newActivity(name, difficulty, duration, season, countryID, description)
    res.status(200).send({result})
} catch (error) {
    res.status(400).send(error.message)
}
})  

router.get('/', async (req, res) => {
    try {
        const result = await Activity.findAll({ include: { 
            model: Country, 
            attributes: ['id','name','flag_img'],
            through: { attributes: [] }}})
        // console.log(result)
        res.status(200).json(result)

    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.delete('/:id', async (req, res)=>{
    try {
        const name = req.params.id
    let result = await deleteActivity(name)
    res.status(200).send(result)
} catch (error) {
    res.status(400).send(error.message)
}
})  

router.put('/:id', async (req, res)=>{
    try {
        const id = req.params.id
        const { name, difficulty, duration, season, countryID, description } = req.body;
    let result = await updateActivity(id, name, difficulty, duration, season, countryID, description)
    res.status(200).send(result)
} catch (error) {
    res.status(400).send(error.message)
}
})

module.exports = router;