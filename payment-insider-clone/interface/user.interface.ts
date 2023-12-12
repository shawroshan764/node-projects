// user.interface.ts

import { Document } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  password: string;
  mobile: string;
  gender: 'male' | 'female';
  city: string;
  state: string;
  isAdmin: boolean;
  softDelete: boolean;
  createdAt: Date;
  events: string[];
}

export default User;
