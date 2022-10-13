const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const JobSchema = mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, "Please provide a job title"],
        maxLength: 200,
        lowercase: true,
    },

    description: {
        type: String,
        required: true
    },

    datePosted: {
        type: Date,
        value: new Date()
    },

    validThrough: {
        type: Date,
        required: true
    },

    jobLocation: {
        type: String,
        required: true,
        enum: {
            values: ["on-site", "remote", "hybrid"],
            message: "job location value can't be {VALUE}, must be on-site/remote/hybrid"
        }
    },

    hiringOrganization: {
        name: {
            type: String,
            required: true,
            lowercase: true,
            maxLength: 250
        },

        companyWebsite: {
            type: String,
            validate: [validator.isURL, "Please provide a valid url"]
        },

        logo: String
    },

    hiringManager: {
        type: ObjectId,
        ref: "Manager"
    },

    employmentType: {
        type: String,
        required: true,
        enum: {
            values: ["contract", "full-time", "part-time", "intern"],
            message: "employment type value can't be {VALUE}, must be contract/full-time/part-time/intern"
        }
    },

    baseSalary: {
        type: Number,
        min: 0,
    }

}, {
    timestamps: true
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;