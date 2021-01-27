const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const projectsRouter = require('./projects.js');
const charitiesRouter = require('./charities.js');
const { route } = require('./charities.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/projects', projectsRouter);

router.use('/charities', charitiesRouter);

module.exports = router;