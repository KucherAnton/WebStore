const Router = require('express');
const router = new Router();
const deviceRouter = require('./deviceRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');

router.use('/user', deviceRouter);
router.use('/type', brandRouter);
router.use('/brand', typeRouter);
router.use('/device', userRouter);

module.exports = router;
