// user.model.ts

import { Schema, model } from 'mongoose';
import UserInterface from '../interface/user.interface';
const bcrypt = require("bcrypt");


const userSchema = new Schema<UserInterface>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true, unique:true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }], // Assuming you have an 'Event' model
    isAdmin: { type: Boolean, default: false },
    softDelete: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

// Hash the password before saving to the database
userSchema.pre("save", async function (next) {
    const user = this;
  
    // Only hash the password if it's modified or a new user
    if (!user.isModified("password")) return next();
  
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(user.password, saltRounds);
      user.password = hashedPassword;
      next();
    } catch (error:any) {
      return next(error);
    }
  });

const UserModel = model<UserInterface>('User', userSchema);

export default UserModel;
