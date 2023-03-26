const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const {Error} = require("mongoose");

const readGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})

const createGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        throw new Error('Goal not found')
    }
    if (!req.user) {
        res.status(400)
        throw new Error('User not found')
    }
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User is not authorized')
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
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User is not authorized')
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