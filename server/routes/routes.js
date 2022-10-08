const express = require("express");
const { Organizer, Hackathon } = require("../models/model");

// routing aka how an app's endpoints (URIs) respond to client reqs
const router = express.Router(); // express router is a class which helps us to create route handlers

// post new hackathon data
router.post("/addHackathon", async (req, res) => {
  // asynchronous callbacks make sure that a ftn doesn't run before a task is completed and instead runs right after it is completed
  const data = new Hackathon({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description,
    image: req.body.image,
    level: req.body.level,
  });

  try {
    const dataToSave = await data.save(); // save data to the model
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get all hackathons by organizer
router.get("/getAllHackathons", async (req, res) => {
  try {
    const data = await Hackathon.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get hackathon by ID
router.get("/getHackathon/:id", async (req, res) => {
  try {
    const data = await Hackathon.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// update hackathon by ID
router.patch("/updateHackathon/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true }; // specifies whether to return the updated data in the body or not
    const result = await Hackathon.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete hackathon by ID
router.delete("/deleteHackathon/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Hackathon.findByIdAndDelete(id);
    res.send(`Hackathon with title: ${data.name} has been deleted...`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
