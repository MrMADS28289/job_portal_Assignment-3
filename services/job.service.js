const Job = require("../models/Job");

exports.createJobService = async (data) => {
  const result = await Job.create(data);
  return result;
}

exports.getJobsService = async () => {
  const jobs = await Job.find({})
  return jobs;
}

exports.getJobByIdService = async (id) => {
  const job = await Job.findOne({ _id: id })

  return job;
}