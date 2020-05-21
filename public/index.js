const mongoose = require("mongoose");

const Workout = require("./workout");
const Resistance = require("./resistance");
const Cardio = require("./cardio");

init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

