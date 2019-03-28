import express from 'express';
import ResponseFormatter from '../utils/ResponseFormatter';
import MonthTaxCalculator from '../models/MonthTaxCalculator';

const perMonthRouter = express.Router();

perMonthRouter.get('/:tax', (req, res) => {
    const taxCalculator = new MonthTaxCalculator(req.params.tax);
    res.send(ResponseFormatter.json(taxCalculator));
});

export default perMonthRouter;