const express = require('express');
const router = express.Router();

const gitrepoRoutes = require('./gitrepo.route');
const bookmarkRoutes = require('./bookmark.route');

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));


router.use('/gitrepo', gitrepoRoutes);
router.use('/bookmark', bookmarkRoutes);



module.exports = router;