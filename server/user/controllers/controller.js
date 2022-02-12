import bcrypt from "bcrypt";
import fs from "fs";
import csv from "csv-parser";
import { randomBytes } from "crypto";
import User from "../models/user.js";

export const signIn = async (req, res) => {
  try {
    const user = await User.findOne({
      userID: req.body.userID,
    });

    if (!user) return res.status(404).json({ message: "User not found." });

    const password = await bcrypt.compare(req.body.password, user.password);

    if (!password)
      return res.status(404).json({ message: "Passwords did not match" });

    if (user)
      return res
        .status(201)
        .json({ userID: user.userID, message: "User successfully found" });
    else return res.status(201).json({ message: "User not found" });
  } catch (error) {
    res.status(500).json({ message: "Error occured" });
  }
};

export const signUp = async (req, res) => {
  try {
    const userID = randomBytes(4).toString("hex");

    const isUserIDPresent = await User.findOne({ userID });

    if (isUserIDPresent)
      return res.status(500).json({ message: "Same user ID generated again." });

    const user = new User({
      userID,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 12),
    });

    const addedUser = await user.save();

    if (addedUser)
      return res
        .status(201)
        .json({ userID: addedUser.userID, message: "User successfully added" });
    else return res.status(500).json({ message: "Error occured" });
  } catch (error) {
    return res.status(500).json({ message: "Error occured" });
  }
};

export const addData = async (req, res) => {
  try {
    const file = req.file;

    const results = [];

    fs.createReadStream(file.path)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", async () => {
        for (let i = 0; i < results.length; i++) {
          try {
            const userID = randomBytes(4).toString("hex");

            const isUserIDPresent = await User.findOne({ userID });

            if (isUserIDPresent)
              return res
                .status(500)
                .json({ message: "Same user ID generated again." });

            const user = new User({
              userID,
              email: results[i].email,
              password: await bcrypt.hash(results[i].password, 12),
            });

            const addedUser = await user.save();
          } catch (error) {
            console.log(error);
          }
        }

        return res.status(200).json({ message: "Users created" });
      })
      .on("error", (err) => {
        return res.status(500).json({ message: "Error occured" });
      });
  } catch (error) {
    return res.status(500).json({ message: "Error occured" });
  }
};
