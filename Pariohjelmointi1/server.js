require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const connectDB = require("./config/db");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", require("./routes/userRoute"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connectDB();
