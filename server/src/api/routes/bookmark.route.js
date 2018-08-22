const express = require('express');
const controller = require('../controllers/bookmark.controller')

const router = express.Router();

router.route('/').get(controller.getAllBookmarks);
router.route('/').post(controller.addBookmark);
router.route('/:id').delete(controller.removeBookmark);



module.exports = router; 