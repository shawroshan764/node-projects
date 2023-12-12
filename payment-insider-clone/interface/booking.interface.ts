import { Document, Schema } from 'mongoose';
import  IUser  from '../interface/user.interface'; // Update this path accordingly
import IEvent from "../interface/event.interface" // Update this path accordingly

export interface IBooking extends Document {
    eventId: Schema.Types.ObjectId | IEvent;
    userId: Schema.Types.ObjectId | IUser;
    totalTickets: number;
    totalAmount: number;
    createdAt: Date;
    softDelete?: boolean;
    name: string;
    mobile: string;
}
