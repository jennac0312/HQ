const express = require("express")
const router = express.Router()
const shCtrl = require('../../controllers/safehouse/safehouse')

router.post('/', shCtrl.createNote)
router.get('/:id', shCtrl.getNotes)

module.exports = router