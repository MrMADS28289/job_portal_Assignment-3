const express = require("express");
const jobController = require("../controllers/job.controller");

const router = express.Router();

router.route("/")
    .post(jobController.createJob)


module.exports = router;