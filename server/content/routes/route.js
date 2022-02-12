import express from "express";
import * as controller from "../controllers/controller.js";
import upload from "../utils/multer.config.js";

const router = express.Router();

router.get("/top-content", controller.topContent);

router.post("/data", upload.single("data"), controller.addData);

router.put("/like", controller.likeBook);

router.put("/unlike", controller.unlikeBook);

export default router;
