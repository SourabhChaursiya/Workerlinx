const asyncHandler = require("express-async-handler");
const CallHistory = require("../model/callHistoryModel");
const Worker = require("../model/workerModel");
const User = require("../model/userModel");

const createCallHistory = asyncHandler(async (req, res) => {
  const { workerId } = req.body;
  const userId = req.user;

  const workerAvailable = await Worker.findById(workerId);
  const userAvailable = await User.findById(userId);

  if (!workerAvailable) {
    res.status(404);
    throw new Error("Worker not found!");
  }

  if (!userAvailable) {
    res.status(404);
    throw new Error("User not found!");
  }

  const callHistory = await CallHistory.create({
    userData: userId,
    workerData: workerId,
  });

  res
    .status(201)
    .json({ message: "Call History created successfully!", callHistory });
});

const getCallHistory = asyncHandler(async (req, res) => {
  const callHistory = await CallHistory.find()
    .populate("userData", "username profileImg phone address")
    .populate("workerData", "username profileImg phone address");

  res.status(200).json(callHistory);
});

module.exports = {
  createCallHistory,
  getCallHistory,
};
