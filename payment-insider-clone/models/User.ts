// user.model.ts

import { Schema, model } from 'mongoose';
import UserInterface from '../interface/user.interface';

const userSchema = new Schema<UserInterface>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }], // Assuming you have an 'Event' model
    isAdmin: { type: Boolean, default: false },
    softDelete: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
});

const UserModel = model<UserInterface>('User', userSchema);

export default UserModel;
