const express = require('express');
const router = express.Router();
const hqCtrl = require("../../controllers/hq/hq")

// '/hq'

router.post( '/', hqCtrl.createPost )
router.get( '/', hqCtrl.getAllPosts )
router.put( '/', hqCtrl.updatePost )
router.delete( '/:id', hqCtrl.deletePost ) // for params
// router.delete( '/', hqCtrl.deletePost ) // for body


module.exports = router