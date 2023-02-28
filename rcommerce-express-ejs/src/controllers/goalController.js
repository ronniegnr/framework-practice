const readGoals = (request, response) => {
    response.status(200).json({message: 'Get Goals'})
}

const createGoal = (request, response) => {
    if (!request.body.text) {
        response.status(400)
        throw new Error('Please add a text field')
    }
    console.log(request.body);
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