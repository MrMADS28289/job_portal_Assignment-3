const express = require("express");
const jobController = require("../controllers/job.controller");

const router = express.Router();

router.route("/")
    .get(jobController.getJobs);

router.route("/:id")
    .get(jobController.getJobById)
// .patch(supplierController.updateSupplier);


module.exports = router;