import express from "express";
import TaxConverterBuilder from "../models/TaxConverterBuilder";
import { BAD_REQUEST } from "../middlewares/httpErrorMiddleware";

const router = express.Router();

router.get("/:tax", (req, res, next) => {
  try {
    const taxCalculator = TaxConverterBuilder.createInstance(
      req.baseUrl,
      req.params.tax,
    );

    res.send(taxCalculator.serialize());
  } catch (error) {
    next(BAD_REQUEST);
  }
});

export default router;
