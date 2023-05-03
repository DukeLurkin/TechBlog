const router = require('express').Router();
const userRoutes = require('./userRoute');
const commentRoutes = require('./commentRoute');
const postRoutes = require('./postRoute');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;
