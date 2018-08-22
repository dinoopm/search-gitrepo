 /* eslint-disable camelcase */
const axios = require('axios');



/**
 * @api {post} gitrepo/search-repositories/:q Search and retrieve repositories 
 * @apiName searchRepositories
 * @apiGroup Search
 * @apiVersion 0.1.0
 *
 * @apiParam {String} id search text
 *
 * @apiSuccess {Array} List of repositories based on search text.
 * @apiSuccess {Number} count  Total number of repositories based on search text.
 *
 * @apiSuccessExample Success-Response:
 *     
 *     {
 *       "count": 1,
 *       "list": [{}]
 *     }
 *
 *
 */



exports.searchRepositories = async (q) => {
  
  const url = `https://api.github.com/search/repositories?q=${q}`;

  const response = await axios.get(url);

  const {total_count, items} = response.data;

  return {
  	count:total_count,
  	list:items
  }

};