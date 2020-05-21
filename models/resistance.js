const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        trim: true,
        required: "What is the name of your resistance exercise?"
    },
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workout'
    }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;
