const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

  router.get(
    '/:userId/:amount',
    asyncHandler(async (req, res) => {
      const { userId, amount } = req.params;
      const user = await User.findByPk(userId);

      user.accountBalance -= amount;
      user.save();
  
      await setTokenCookie(res, user);
  
      return res.json({
        user
      });
    }),
  );

  router.get(
    '/:userId',
    asyncHandler(async (req, res) => {
      const { userId } = req.params;
      const user = await User.findByPk(userId);

      user.accountBalance = 10000;
      user.save();
  
      await setTokenCookie(res, user);
  
      return res.json({
        user
      });
    }),
  );
  
  router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { password, username } = req.body;
      const user = await User.signup({  username, password, accountBalance: 10000.75 });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user
      });
    }),
  );

  

  module.exports = router;
