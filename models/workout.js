const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    { type: String,
      name: String,
      duration: Number,
      distance: Number,
      weight: Number,
      reps: Number,
      sets: Number 
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
