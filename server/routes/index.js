const Router = require('express');
const deviceRouter = require('./deviceRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter');

const router = new Router();

router.use('/device', deviceRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);
router.use('/user', userRouter);

module.exports = router;
