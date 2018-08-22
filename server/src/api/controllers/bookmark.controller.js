 const services = require('../services/bookmark')


/**
 * bookmark list
 * Returns existing boookmarks
 * @public
 */
exports.getAllBookmarks = async (req, res, next) => {
  try { 

    const json = await services.getAllBookmarks(req.params.id);

    return res.json(json);
  } catch (error) {
    return next(error);
  }
};


/**
 * Add to bookmark list
 * Returns existing boookmarks
 * @public
 */
exports.addBookmark = async (req, res, next) => {
  try { 
    console.log(req);
    const json = await services.addBookmark(req.body.id);

    return res.json(json);
  } catch (error) {
    return next(error);
  }
};


/**
 * Removes to bookmark list
 * Returns existing boookmarks
 * @public
 */
exports.removeBookmark = async (req, res, next) => {
  try { 

    const json = await services.removeBookmark(req.params.id);

    return res.json(json);
  } catch (error) {
    return next(error);
  }
};

