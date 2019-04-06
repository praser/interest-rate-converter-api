import express from "express";
import HttpErrors from "../HttpErrors";
import TaxConverterBuilder from "../models/TaxConverterBuilder";

const router = express.Router();

router.get("/:tax", (req, res) => {
  try {
    const taxCalculator = TaxConverterBuilder.createInstance(
      req.baseUrl,
      req.params.tax,
    );

    res.send(taxCalculator.serialize());
  } catch (error) {
    res.status(HttpErrors.NOT_FOUND().code).send({
      error: {
        ...HttpErrors.BAD_REQUEST(),
      },
    });
  }
});

export default router;
