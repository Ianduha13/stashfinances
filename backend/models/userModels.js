import mongoose from "mongoose"

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

export default mongoose.model("User", userSchema)
