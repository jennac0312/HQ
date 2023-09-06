const express = require("express")
const router = express.Router()
const shCtrl = require('../../controllers/safehouse/safehouse')

router.post('/', shCtrl.createNote)

module.exports = router