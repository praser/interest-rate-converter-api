import express from "express";
import DayTaxCalculator from "../models/DayTaxCalculator";
import ResponseFormatter from "../utils/HttpResponseUtil";

const perDayRouter = express.Router();

perDayRouter.get("/:tax", (req, res) => {
  const taxCalculator = new DayTaxCalculator(req.params.tax);
  res.send(ResponseFormatter.json(taxCalculator));
});

export default perDayRouter;
