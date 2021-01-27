const express = require('express');
const asyncHandler = require('express-async-handler');
const { Charity } = require('../../db/models');
const router = express.Router();

router.get(
    '',
    asyncHandler(async (req, res) => {
        const charities = await Charity.findAll();
        return res.json({
            charities
        });
    }),
);


module.exports = router;