const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const authRouter = require("./app/routes/auth.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
