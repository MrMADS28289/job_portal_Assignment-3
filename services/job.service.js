const Job = require("../models/Job");

exports.createJobService = async (data) => {
  const result = await Job.create(data);
  return result;
}


exports.getJobsService = async () => {
  const brands = await Job.find({})
  return brands;
}


// exports.getBrandByIdService = async (id) => {
//   const brand = await Brand.findOne({ _id: id })

  
//   return brand;
// }


// exports.updateBrandService = async (id, data) => {
//   const result = await Brand.updateOne({ _id: id }, data, {
//     runValidators: true
//   });
//   return result;
// }





//store
//category