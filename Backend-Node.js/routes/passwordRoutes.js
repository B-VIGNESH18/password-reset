// passwordRoutes.js - Example route setup using Express Router

const express = require("express");
const router = express.Router();
const resetPasswordController = require("../controllers/ResetPasswordController");

router.post("/reset-password", resetPasswordController.resetPassword);

module.exports = router;
