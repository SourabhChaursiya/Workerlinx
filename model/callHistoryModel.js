const mongoose = require("mongoose");

const callHistorySchema = mongoose.Schema(
  {
    userData: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    workerData: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Worker",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CallHistory", callHistorySchema);
