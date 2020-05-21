const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: 'Please enter an exercise type.'
  },

  name: {
    type: String,
    trim: true,
    required: 'Please provide a name for this exercise.'
  },

  duration: {
    type: Number,
    required: 'Please enter how many minutes this exercise should take.'
  },

  distance: Number,
  weight: Number,
  reps: Number,
  sets: Number
})

const Exercise = mongoose.model('Exercise', ExerciseSchema)

module.exports = Exercise
