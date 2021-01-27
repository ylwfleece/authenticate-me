const express = require('express');
const asyncHandler = require('express-async-handler');
const { Watchlist } = require('../../db/models');
const router = express.Router();

router.get(
    '',
    asyncHandler(async (req, res) => {
        const watchlists = await Watchlist.findAll();
        return res.json({
            watchlists
        });
    }),
);

router.post(
    '',
    asyncHandler(async (req, res) => {
        const { projectId, userId } = req.body;
        const watchlist = await Watchlist.create( { userId, projectId });
        return res.json({
            watchlist
        });
    }),
);



module.exports = router;