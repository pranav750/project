import express from "express";
import * as controller from "../controllers/controller.js";
import upload from "../utils/multer.config.js";
import validationCheck from "../middleware/validation.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/sign-in",
  body("userID")
    .isAlphanumeric()
    .custom((value) => {
      if (value.length !== 8) return false;
      else return true;
    }),
  body("password").isStrongPassword(),
  validationCheck,
  controller.signIn
);

router.post(
  "/sign-up",
  body("email").isEmail(),
  body("password").isStrongPassword(),
  validationCheck,
  controller.signUp
);

router.post("/data", upload.single("data"), controller.addData);

export default router;
