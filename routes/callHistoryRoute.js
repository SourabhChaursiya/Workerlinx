const express = require("express");
const { validateUserToken } = require("../middleware/validateTokenHandler");
const {
  createCallHistory,
  getCallHistory,
} = require("../controllers/callHistoryController");

const router = express.Router();

router.post("/create", validateUserToken, createCallHistory);
router.get("/all", getCallHistory);

module.exports = router;
