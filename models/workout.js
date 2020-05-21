const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: []
});

  // exercises: [
  //   { 
  //     type: {
  //       type: String,
  //       trim: true,
  //       required: "Please enter an exercise type."
  //     },

  //     name: {
  //       type: String,
  //       trim: true,
  //       required: "Please provide a name for this exercise."
  //     },

  //     duration: {
  //       type: Number,
  //       required: "Please enter how many minutes this exercise should take."
  //     },

  //     distance: Number,
  //     weight: Number,
  //     reps: Number,
  //     sets: Number, 

      // totalDuration: {
      //   type: Map,
      //   of: Number
      // }

//     }
//   ]
// });

{
  toJSON: {
    virtuals: true
  }
}

workoutSchema.virtual("totalDuration").get(function () {
return this.exercises.reduce((total, exercise) => {
  return total + exercise.duration;
}, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
