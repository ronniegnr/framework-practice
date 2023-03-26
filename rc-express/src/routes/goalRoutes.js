const express = require('express')
const router = express.Router()
const {
    readGoals,
    createGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

router.route('/').get(readGoals).post(createGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router