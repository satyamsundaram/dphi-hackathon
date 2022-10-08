// defines db schema

const mongoose = require("mongoose");
const { Schema } = mongoose;

const organizerSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  hackathons: [
    {
      type: [Schema.Types.ObjectId],
      ref: "Hackathon",
    },
  ],
});

const hackathonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: String,
  level: {
    type: String,
    required: true,
    enum: ["Easy", "Medium", "Hard"],
  },
});

const Organizer = mongoose.model("Organizer", organizerSchema);
const Hackathon = mongoose.model("Hackathon", hackathonSchema);

module.exports = { Organizer, Hackathon };
