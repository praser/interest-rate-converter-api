import express from 'express';
import YearTaxCalculator from '../models/YearTaxCalculator';
import ResponseFormatter from '../utils/ResponseFormatter';

const perYearRouter = express.Router();

perYearRouter.get('/:tax', (req, res) => {
    const taxCalculator = new YearTaxCalculator(req.params.tax);
    res.send(ResponseFormatter.json(taxCalculator));
});

export default perYearRouter;