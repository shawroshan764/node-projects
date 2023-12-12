
import express, { Router } from 'express';

const userRouter: Router = express.Router();

// Define user routes
userRouter.get('/', (req, res) => {
  res.send('User routes');
});

export default userRouter;
