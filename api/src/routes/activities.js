const { Router } = require('express');
const { newActivity } = require('../controllers/Activity')
const router= Router();

router.post('/', newActivity )  


module.exports = router;