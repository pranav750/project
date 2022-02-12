import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import route from "./routes/route.js";
import { connectIo } from "./utils/socket.js";

const PORT = 8001;
const MONGO_CONNECTION_URL = "mongodb://mongo:27017/myFirstDatabase";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(route);

app.get("/", (req, res) => {
  res.send("Hello to Content Microservice");
});

mongoose
  .connect(MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    const server = app.listen(PORT, () => {
      console.log(`Server running at ${PORT}`);
    });

    const io = connectIo(server);
    io.on("connection", (socket) => {
      console.log("Client connected");
    });
  })
  .catch((err) => console.log(err));
