const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { chats } = require("./data/data");
const userRoute = require("./Routes/userRoute");
dotenv.config();
connectDB();

app.get("/", (req, resp) => {
  resp.send("api is running");
});

app.use(express.json());
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 4500;
app.listen(PORT, console.log(`Server is started on port ${PORT}`));
