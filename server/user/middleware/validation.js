import { validationResult } from "express-validator";

const validationCheck = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(404).json({ message: "Invalid value" });
  else next();
};

export default validationCheck;
