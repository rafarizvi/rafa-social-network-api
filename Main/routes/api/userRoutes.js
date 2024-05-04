const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

// /api/courses
router.route('/').get(getUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:userId')
  .get(getSingleUser)

module.exports = router;