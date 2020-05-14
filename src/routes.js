const { Router } = require('express');
const routes = Router();
const postController = require('./controllers/postController.js');
const adminController = require('./controllers/adminController.js');
const sessionController = require('./controllers/sessionController.js');
const searchController = require('./controllers/searchController.js');
const homeController = require('./controllers/homeController.js');

routes.get('/posts', postController.index);
routes.get('/search', searchController.search);
routes.get('/home', homeController.initial);
routes.get('/session', homeController.session);
routes.get('/archives', postController.getArchivedPost);
routes.post('/post', postController.create);
routes.post('/update', postController.update);

routes.post('/admin', adminController.create);
routes.post('/login', sessionController.login);
routes.get('/admin', adminController.getUniqueAdm);

module.exports = routes;