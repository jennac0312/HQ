const express = require('express');
const router = express.Router();
const hqCtrl = require("../../controllers/hq/hq")

// '/hq'

router.post( '/', hqCtrl.createPost )
router.get( '/', hqCtrl.getAllPosts )
router.put( '/', hqCtrl.updatePost )
// router.delete( '/:id', hqCtrl.deletePost )
router.delete( '/', hqCtrl.deletePost )


module.exports = router