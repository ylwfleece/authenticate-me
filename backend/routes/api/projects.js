const express = require('express');
const asyncHandler = require('express-async-handler');
const { Project } = require('../../db/models');
const router = express.Router();

router.get(
    '',
    asyncHandler(async (req, res) => {
        const projects = await Project.findAll();
        return res.json({
            projects
        });
    }),
);


module.exports = router;