# fitnessTracker

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Business Context

A consumer will reach their fitness goals quicker when they track their workout progress.

## What My App Needs To Do:
- Should give user option to create new workout, or continue w/ their last workout
- Add exercises to an existing workout plan, or use combination of exercises for a new workout plan
- Each workout should have multiple exercises
- Each exercise should have its name, type, weight, sets, reps and duration (cardio should track distance traveled)
- Should be deployed to Heroku

# Technologies Used
- MongoDB/Mongoose, Express.js, Bootstrap

# Future Development
- Want to remove properties that have any values that are 'null' or 'NaN' or 'undefined' from appearing at all on front of the tracker
