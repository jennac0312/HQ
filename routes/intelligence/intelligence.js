const express = require('express');
const router = express.Router();
const intelCtrl = require("../../controllers/intelligence/intelligence")

router.post( '/', intelCtrl.createPost )
router.get( '/', intelCtrl.getAllPosts )
router.put( '/', intelCtrl.updatePost )
router.delete( '/', intelCtrl.deletePost )

module.exports = router