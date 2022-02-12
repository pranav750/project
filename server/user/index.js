import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import route from "./routes/route.js";

const PORT = 8000;
const MONGO_CONNECTION_URL = "mongodb://mongo:27017/myFirstDatabase";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(route);

app.get("/", (req, res) => {
  res.send("Hello to User Microservice");
});

mongoose
  .connect(MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server running at ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

process.on("exit", () => {
  channel.close();
});
