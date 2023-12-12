import express, { Router } from 'express';
import userRoutes from './userRoutes';
import eventRoutes from './eventRoutes';

const indexRouter: Router = express.Router();
indexRouter.use('/users', userRoutes);

indexRouter.use('/events', eventRoutes);

export default indexRouter;
