const express = require("express");
const keys = require("./config/keys");
require("./models/Users");
require("./services/passport");

const mongoose = require("mongoose");
mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const PORT = 5000;
const app = express();
require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
