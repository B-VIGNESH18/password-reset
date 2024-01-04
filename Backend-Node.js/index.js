// index.js - Main file to start the server and set up Express
// const express = require("express");
// const app = express();
// const passwordRoutes = require("./routes/passwordRoutes");

// // Middleware setup and other configurations

// // Use passwordRoutes for password-related routes
// app.use("/api/password", passwordRoutes);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const app = express();
const passwordRoutes = require("./routes/passwordRoutes");

// Middleware for parsing JSON body
app.use(express.json());

// Route middleware
app.use("/api", passwordRoutes);
// Assuming the '/api/reset-password' endpoint

app.post("/api/reset-password", async (req, res) => {
  const { email } = req.body;

  // Check if the user exists in the database based on the provided email
  const user = await User.findOne({ email });

  if (user) {
    // Generate a random string/token
    const randomString = generateRandomString(); // Implement your token generation logic

    // Send email containing a link with the random string/token
    const resetLink = `http://yourwebsite.com/reset-password?token=${randomString}`;
    await sendResetEmail(email, resetLink); // Implement your email sending logic

    // Store the token (optional)

    // Respond with success status
    return res
      .status(200)
      .json({ message: "Password reset initiated. Check your email." });
  } else {
    // If user does not exist, respond with an error
    return res.status(404).json({ error: "User not found." });
  }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
