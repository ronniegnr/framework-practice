const express = require('express')
const {response} = require("express");
const router = express.Router()

router.get('/', (request, response)=> {
    response.status(200).json({message: 'Get Goals'})
})

module.exports = router