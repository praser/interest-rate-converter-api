import express from 'express';
import ResponseFormatter from '../utils/HttpResponseUtil';
import DayTaxCalculator from '../models/DayTaxCalculator';

const perDayRouter = express.Router();

perDayRouter.get('/:tax', (req, res) => {
    const taxCalculator = new DayTaxCalculator(req.params.tax);
    res.send(ResponseFormatter.json(taxCalculator));
});

export default perDayRouter;