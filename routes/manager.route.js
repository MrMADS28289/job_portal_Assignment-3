const express = require("express");
const managerController = require("../controllers/manager.controller");

const router = express.Router();

router.route("/")
    .post(managerController.createManager)
//     .get(supplierController.getSuppliers);

// router.route("/:id")
//     .get(supplierController.getSupplierById)
//     .patch(supplierController.updateSupplier);


module.exports = router;