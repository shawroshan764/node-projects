
import express, { Router } from 'express';

const eventRouter: Router = express.Router();

// Define event routes
eventRouter.get('/', (req, res) => {
  res.send('Event routes');
});

export default eventRouter;
