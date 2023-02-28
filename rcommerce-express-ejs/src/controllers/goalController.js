const readGoals = (request, response) => {
    response.status(200).json({message: 'Get Goals'})
}

const createGoal = (request, response) => {
    response.status(200).json({message: 'Create Goal'})
}

const updateGoal = (request, response) => {
    response.status(200).json({message: `Update Goal of ${request.params.id}`})
}

const deleteGoal = (request, response) => {
    response.status(200).json({message: `Delete Goal of ${request.params.id}`})
}

module.exports = {
    readGoals,
    createGoal,
    updateGoal,
    deleteGoal
}