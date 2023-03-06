const asyncHandler = require("express-async-handler");
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(401).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })

    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }

    res.status(200).json({message: 'Register User'});
})

const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Login User'})
})

const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Me'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}

