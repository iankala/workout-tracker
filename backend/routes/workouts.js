const express = require('express')
const {
    create_workout,
    getWorkouts, 
    getWorkout,
    delete_workout,
    update_workout
} = require ('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', create_workout)

// DELETE a workout
router.delete('/:id',delete_workout)


// UPDATE a workout
router.patch('/:id',update_workout)


module.exports = router