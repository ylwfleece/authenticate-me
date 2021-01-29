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

router.get(
    '/:projectId',
    asyncHandler(async (req, res) => {
        const { projectId } = req.params;
        const project = await Project.findOne({
            where: {
                id: projectId
            }
        });
        project.karmaReleased = true;
        project.save();

        return res.json({
            project
        });
    }),
);


module.exports = router;