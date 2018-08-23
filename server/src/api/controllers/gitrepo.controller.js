const services = require('../services/gitrepo')

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


exports.searchRepositories = async (req, res, next) => {
  try { 

    const json = await services.searchRepositories(req.params.q);

    return res.json(json);
  } catch (error) {
    return next(error);
  }
};