const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/ToDoRoutes");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({ origin: ['https://todo-app-frontend-two.vercel.app', 'https://another-allowed-origin.com'],}));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
