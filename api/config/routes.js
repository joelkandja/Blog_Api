/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  // URL FEATURES CATEGORIES

  'POST /api/v1/categories/create-category': { action: 'categories/create-category' },
  'GET /api/v1/categories/get-categories': { action: 'categories/get-categories' },
  'GET /api/v1/categories/get-category': { action: 'categories/get-category' },
  'PATCH /api/v1/categories/update-category': { action: 'categories/update-category' },

  // URL FEATURES POSTS

  'POST /api/v1/posts/create-post': { action: 'posts/create-post' },
  'GET /api/v1/posts/get-post': { action: 'posts/get-post' },
  'GET /api/v1/posts/get-posts': { action: 'posts/get-posts' },
  'PATCH /api/v1/posts/update-post': { action: 'posts/update-post' },

};
