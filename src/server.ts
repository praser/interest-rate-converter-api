import express from 'express';
import perDayRouter from './routes/perDayRouter';
import perMonthRouter from './routes/perMonthRouter';
import perYearRouter from './routes/perYearRouter';

const server = express();

server.use('/per-day', perDayRouter);
server.use('/per-month', perMonthRouter);
server.use('/per-year', perYearRouter);

export default server;