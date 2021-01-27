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

router.post(
    '',
    asyncHandler(async (req, res) => {
        const { numberOfShares, projectId, userId } = req.body;
        const purchase = await Purchase.create( { numberOfShares, projectId, userId});
        return res.json({
            purchase
        });
    }),
);



module.exports = router;