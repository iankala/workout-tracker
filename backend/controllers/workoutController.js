const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

const getWorkouts = async (req, res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

const getWorkout = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error:"no such workout"})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error:'no such workout'})
    }

    res.status(200).json(workout)
}

const create_workout = async (req, res)=>{
     const {title, load, reps} = req.body 

    let emptyFields = []

    if (!title){
        emptyFields.push('title')
    }

    if (!load){
        emptyFields.push('load')
    }

    if (!reps){
        emptyFields.push('reps')
    }

    if(emptyFields.length>0){
        return res.status(400).json({error:'please fill in all fields', emptyFields})
    }

  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const delete_workout = async(req, res )=>{
     const { id } = req.params
     
     if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error:"no such workout"})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

     if (!workout) {
        return res.status(404).json({error:'no such workout'})
    }

    res.status(200).json(workout)

}

const update_workout = async(req, res)=>{
    const { id } = req.params
     
     if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error:"no such workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(404).json({error:'no such workout'})
    }

    res.status(200).json(workout)
}


module.exports = {
    getWorkouts, 
    getWorkout,
    create_workout,
    delete_workout,
    update_workout
}
