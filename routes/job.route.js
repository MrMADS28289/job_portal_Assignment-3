const express = require("express");
const jobController = require("../controllers/job.controller");

const router = express.Router();

router.route("/")
    .post(jobController.createJob)
    .get(jobController.getJobs)

router.route("/:id")
    .patch(jobController.updateJob)


module.exports = router;