const Manager = require("../models/Manager");

exports.createManagerService = async (data) => {
    const result = await Manager.create(data);
    return result;
}


// exports.getSuppliersService = async () => {
//   const suppliers = await Supplier.find({})
//   return suppliers;
// }


// exports.getSupplierByIdService = async (id) => {
//   const supplier = await Supplier.findOne({ _id: id });
//   return supplier;
// }


// exports.updateSupplierService = async (id, data) => {
//   const result = await Supplier.updateOne({ _id: id }, data, {
//     runValidators: true
//   });
//   return result;
// }