const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

const readGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const createGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
    })
    res.status(200).json(goal)
})

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        throw new Error(`${req.params.id} goal not found`)
    }
    await Goal.deleteOne(goal)
    res.status(200).json({message: `${req.params.id} goal deleted`})
})

module.exports = {
    readGoals,
    createGoal,
    updateGoal,
    deleteGoal
}