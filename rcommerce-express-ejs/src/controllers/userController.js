const registerUser = (req, res) => {
    res.status(200).json({message: 'Register User'})
}

const loginUser = (req, res) => {
    res.status(200).json({message: 'Login User'})
}

const getMe = (req, res) => {
    res.status(200).json({message: 'Get Me'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}

