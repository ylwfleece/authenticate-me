const express = require('express');
const asyncHandler = require('express-async-handler');

// const { handleValidationErrors } = require('../../utils/validation');
const { Project } = require('../../db/models');

const router = express.Router();

router.get(
    '',
    asyncHandler(async (req, res) => {
        const projects = await Project.findAll();
        console.log('\n-----', projects, '\n-----')
        return res.json({
            projects
        });
    }),
);

module.exports = router;