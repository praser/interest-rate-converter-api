import express from "express";
import TaxConverterBuilder from "../models/TaxConverterBuilder";

const router = express.Router();

router.get("/:tax", (req, res) => {
  const taxCalculator = TaxConverterBuilder.createInstance(
    req.baseUrl,
    req.params.tax,
  );
  res.send(taxCalculator.serialize());
});

export default router;
