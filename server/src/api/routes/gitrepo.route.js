const express = require('express');
const controller = require('../controllers/gitrepo.controller')

const router = express.Router();

router.route('/search-repositories/:q').get(controller.searchRepositories);


module.exports = router; 