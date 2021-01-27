const express = require('express');
const asyncHandler = require('express-async-handler');
const { Purchase } = require('../../db/models');
const router = express.Router();

router.get(
    '',
    asyncHandler(async (req, res) => {
        const purchases = await Purchase.findAll();
        return res.json({
            purchases
        });
    }),
);


module.exports = router;