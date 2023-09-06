const express = require("express")
const router = express.Router()
const shCtrl = require('../../controllers/safehouse/safehouse')

router.post('/', shCtrl.createNote)
router.get('/:id', shCtrl.getNotes)
router.delete('/:id', shCtrl.deleteNote)

module.exports = router