// API routes need to find (app.get) workouts, create (app.post) a workout,
// update (app.put) workouts with new exercises, and delete (app.delete) exercises and workouts.

let db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(workout => {
      res.json(workout);
      console.log(workout);
      })
      .catch(err => {
      res.json(err);
    });
  });
    
  app.post("/api/workouts", async (req, res)=> {
    try {
      const response = await db.Workout.create({type: "workout"})
      res.json(response);
      }
    catch(err){
      console.log("ERROR - Not able to create workout:", err)
    }
  })


  app.put("/api/workouts/:id", ({body, params}, res) => {
    console.log(body, params)
    let workoutId = params.id;
    let savedExercises = [];

    db.Workout.find({_id: workoutId})
      .then(dbWorkout => {
        savedExercises = dbWorkout[0].exercises;
        res.json(dbWorkout[0].exercises);
        let allExercises = [...savedExercises, body];
        console.log(allExercises);
        updateWorkout(allExercises);
      })
      .catch(err => {
        res.json(err);
        console.log("ERROR - Not able to find workout:", err)
      });

      function updateWorkout(exercises){
        db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
          if(err){
            console.log("ERROR - Not able to update workout:", err)
          };
        });
      }      
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.delete("/api/workouts/", (req, res) => {
      db.Workout.remove({
        _id: req.params.workout_id
      })
        .then(workout => {
          res.json(workout);
          console.log({ message: "Succesfully deleted workout." });
        })
          .catch(err => {
          res.json(err);
          console.log("ERROR - Not able to delete workout:", err)
          });
        });
};
