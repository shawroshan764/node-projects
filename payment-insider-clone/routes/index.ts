// routes/index.ts

import express, { Router } from 'express';
import userRoutes from './userRoutes';
import eventRoutes from './eventRoutes';

const indexRouter: Router = express.Router();

// Use user routes under /api/users
indexRouter.use('/api/users', userRoutes);

// Use event routes under /api/events
indexRouter.use('/api/events', eventRoutes);

export default indexRouter;
