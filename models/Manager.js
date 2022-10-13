const mongoose = require("mongoose");
const validator = require("validator");

const managerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"],
            trim: true,
            lowercase: true,
            minLength: [3, "Name must be at least 3 characters."],
            maxLength: [100, "Name is too large"],
        },

        email: {
            type: String,
            validate: [validator.isEmail, "Provide a valid Email"],
            trim: true,
            lowercase: true,
            unique: true,
        },

        contactNumber: [{
            type: String,
            required: [true, "Please provide a contact number"],
            validate: {
                validator: (value) => {
                    return validator.isMobilePhone(value);
                },
                message: "Please provide a valid phone number",
            }
        }],

        emergencyContactNumber: {
            type: String,
            required: [true, "Please provide  a emergency contact number"],
            validate: {
                validator: (value) => {
                    return validator.isMobilePhone(value);
                },
                message: "Please provide a valid phone number",
            },
        },

        imageURL: {
            type: String,
            validate: [validator.isURL, "Please provide a valid url"],
        },

        nationalIdImageURL: {
            type: String,
            required: true,
            validate: [validator.isURL, "Please provide a valid url"],
        },

        status: {
            type: String,
            default: "active",
            enum: ["active", "inactive"],
        }

    }, {
    timestamps: true
}
);

const Manager = mongoose.model("Manager", managerSchema);

module.exports = Manager;
