const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  editProfile,
  changePassword,
} = require('../controllers/auth');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile/:id').patch(editProfile);
router.route('/forgot-password').post(forgotPassword);
router.route('/reset-password').patch(resetPassword);
router.route('/password/:id').patch(changePassword);
module.exports = router;
