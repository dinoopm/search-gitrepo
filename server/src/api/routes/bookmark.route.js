const express = require('express');
const controller = require('../controllers/bookmark.controller')

const router = express.Router();

router.route('/').post(controller.addBookmark);
router.route('/:id').delete(controller.removeBookmark);
router.route('/:id').get(controller.getAllBookmarks);

module.exports = router; 