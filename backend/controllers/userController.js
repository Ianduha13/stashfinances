const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const User = require("../models/userModels")

const registerUser = asyncHandler(async (req, res) => {
	const { username, email, password } = req.body

	if (!username || !email || !password) {
		res.status(400)
		throw new Error("Please add all fields")
	}

	const userExists = await User.findOne({ email })

	if (userExists) {
		throw new Error("User already exists")
	}
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	const user = await User.create({
		username,
		email,
		password: hashedPassword,
	})

	if (user) {
		res.status(201).json({
			_id: user.id,
			username: user.username,
			email: user.email,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error("invalid user data")
	}
	res.json({ message: "User registered correctly" })
})

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" })
}

module.exports = { registerUser }
