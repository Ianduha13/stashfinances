const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, "Please add a name"],
		},
		email: {
			type: String,
			required: [true, "Please add a password"],
		},
		password: {
			type: String,
			required: [true, "Please add a password"],
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("User", userSchema)
