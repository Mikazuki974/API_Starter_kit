/*
Imports
*/
// Nodejs
const { Router } = require('express');
const AuthRouterClass = require('./auth/auth.routes');

/* 
Definition des router
*/
// Parent
const mainRouter = Router();
const apiRouter = Router();

// Child
const authRouter = new AuthRouterClass();
//

/* 
Définition des routes
*/
mainRouter.use('/api', apiRouter);
apiRouter.use('/auth', authRouter.init());
//

/* 
Export
*/
module.exports = { mainRouter };
//