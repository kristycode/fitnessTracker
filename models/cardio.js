const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        trim: true,
        required: "What is the name of your cardio exercise?"
    },
    distance: Number,
    duration: Number,
    workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout'
    }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
