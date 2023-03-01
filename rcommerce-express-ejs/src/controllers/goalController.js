const asyncHandler = require('express-async-handler')

const readGoals = asyncHandler(async (request, response) => {
    response.status(200).json({"message": 'Get Goals'})
})

const createGoal = asyncHandler(async (request, response) => {
    if (!request.body.text) {
        response.status(400)
        throw new Error('Please add a text field')
    }
    console.log(request.body);
    response.status(200).json({message: 'Create Goal'})
})

const updateGoal = asyncHandler(async (request, response) => {
    response.status(200).json({message: `Update Goal of ${request.params.id}`})
})

const deleteGoal = asyncHandler(async (request, response) => {
    response.status(200).json({message: `Delete Goal of ${request.params.id}`})
})

module.exports = {
    readGoals,
    createGoal,
    updateGoal,
    deleteGoal
}