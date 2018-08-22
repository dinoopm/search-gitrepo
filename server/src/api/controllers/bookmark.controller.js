const services = require('../services/bookmark')

/**
 * @api {get} /bookmark/:id Request all bookmarked repositories
 * @apiName getAllBookmarks
 * @apiGroup Bookmark
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Repository unique ID.
 *
 * @apiSuccess {Array} list List of bookmark.
 * @apiSuccess {Number} count  Total number of bookmarked items.
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


exports.getAllBookmarks = async (req, res, next) => {
  try { 

    const json = await services.getAllBookmarks(req.params.id);

    return res.json(json);
  } catch (error) {
    return next(error);
  }
};


/**
 * @api {post} /bookmark Add repository to the bookmark list
 * @apiName addBookmark
 * @apiGroup Bookmark
 * @apiVersion 0.1.0
 *
 * @apiParam {Number} id Repository unique ID.
 *
 * @apiSuccess {Array} list List of bookmark.
 * @apiSuccess {Number} count  Total number of bookmarked items.
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
 * @api {delete} /bookmark/:id Remove the bookmarked item from the list 
 * @apiName removeBookmark
 * @apiGroup Bookmark
 * @apiVersion 0.1.0
 *
 *
 * @apiParam {Number} id Repository unique ID.
 *
 * @apiSuccess {Array} list List of bookmark.
 * @apiSuccess {Number} count  Total number of bookmarked items.
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



exports.removeBookmark = async (req, res, next) => {
  try { 

    const json = await services.removeBookmark(req.params.id);

    return res.json(json);
  } catch (error) {
    return next(error);
  }
};

