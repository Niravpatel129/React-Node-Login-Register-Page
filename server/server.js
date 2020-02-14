const express = require("express");
require("./services/passport");
const keys = require("./config/keys");
const mongoose = require("mongoose");
mongoose.connect(keys.mongoURI);

const PORT = 5000;
const app = express();
require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
