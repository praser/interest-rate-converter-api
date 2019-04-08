import express from "express";
import { BAD_REQUEST } from "../middlewares/httpErrorMiddleware";
import RateConverterBuilder from "../models/RateConverterBuilder";

const router = express.Router();

router.get("/:rate", (req, res, next) => {
  try {
    const rateCalculator = RateConverterBuilder.createInstance(
      req.baseUrl,
      req.params.rate,
    );

    res.send(rateCalculator.serialize());
  } catch (error) {
    next(BAD_REQUEST);
  }
});

export default router;
