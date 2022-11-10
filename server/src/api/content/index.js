const contentController = require('./content.controller.js')
const router = require('express').Router()

router.get('/get-all', contentController.getAll)
router.get('/get', contentController.get)
router.post('/add', contentController.add)

module.exports = router;