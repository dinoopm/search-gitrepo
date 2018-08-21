const services = require('../services/gitrepo')

/**
 * Search github based on query
 * Returns repositories
 * @public
 */
exports.searchRepositories = async (req, res, next) => {
  try { 

    const json = await services.searchRepositories(req.params.q);

    return res.json(json);
  } catch (error) {
    return next(error);
  }
};