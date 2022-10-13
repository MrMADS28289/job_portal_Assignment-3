const {
    createJobService,
    getJobsService,
    getJobByIdService,
    updateJobService
} = require("../services/job.service");

exports.createJob = async (req, res, next) => {
    try {
        const result = await createJobService(req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully created the job",
            data: result
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't create the job"
        })
    }
}

exports.getJobs = async (req, res, next) => {
    try {
        const jobs = await getJobsService(req.body);

        res.status(200).json({
            status: "success",
            data: jobs
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the jobs",
        });
    }
};

exports.getJobById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const job = await getJobByIdService(id);

        if (!job) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't find a job with this id"
            })
        }

        res.status(200).json({
            status: "success",
            data: job,
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the job",
        });
    }
};

exports.updateJob = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await updateJobService(id, req.body);
        console.log(result)

        if (!result.nModified) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't update the job with this id",
            });
        }

        res.status(200).json({
            status: "success",
            message: "Successfully updated the job"
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't update the job",
        });
    }
};