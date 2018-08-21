const express = require('express');

const router = express.Router();

const gitrepoRoutes = require('./gitrepo.route');

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));


router.use('/gitrepo', gitrepoRoutes);


module.exports = router;