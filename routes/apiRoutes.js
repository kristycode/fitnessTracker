// API routes need to find (app.get) workouts, create (app.post) a workout,
// update (app.put) workouts with new exercises, and delete (app.delete) exercises and workouts.

// const Workout = require("../models/workout.js");
const db = require('../models')

module.exports = function (app) {
  // create workouts //
  app.post('/api/workouts', function (req, res) {
    db.Workout.create({})
      .then(workouts => {
        res.json(workouts)
      })
      .catch(err => {
        res.json(err)
      })
  })

  // find workouts //
  app.get('/api/workouts', (req, res) => {
    db.Workout.find({})
      .then(workouts => {
        res.json(workouts)
      })
      .catch(err => {
        res.json(err)
      })
  })

  // get range of workouts //
  app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
      .then(workouts => {
        res.json(workouts)
      })
      .catch(err => {
        res.json(err)
      })
  })

  // get particular workout //
  app.put('/api/workouts/:id', function (req, res) {
    console.log(req.body)
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then(workouts => {
        res.json(workouts)
      })
      .catch(err => {
        res.json(err)
      })
  })
}
