/*
Imports
*/
// Nodejs
const { Router } = require('express');
const AuthRouterClass = require('./auth/auth.routes');
const CategoryRouterClass = require('./category/category.routes');


const passport = require('passport');
const { setAuthentication } = require('../services/authentification');
setAuthentication(passport);


/*Définition des routeur*/
// parent
const mainRouter = Router();
const apiRouter = Router();

// enfant
const authRouter = new AuthRouterClass({ passport });
const categoryRouter = new CategoryRouterClass({ passport });


/*Définition des routes*/
mainRouter.use(' / api ', apiRouter);
apiRouter.use(' / auth ', authRouter.init());
apiRouter.use(' / category ', categoryRouter.init());

/* 
Export
*/
module.exports = { mainRouter };
//