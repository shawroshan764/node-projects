// event.model.ts

import { Schema, model } from 'mongoose';
import EventInterface from '../interface/event.interface';

const eventSchema = new Schema<EventInterface>({
    eventName: { type: String, required: true },
    description: { type: String, required: true },
    language: { type: String, enum: Object.values(Language), required: true },
    duration: { type: String, required: true },
    time: { type: String, required: true },
    category: { type: String, enum: Object.values(Category), required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    artists: { type: [String], required: true },
    softDelete: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now, required: true },
    venue: { type: String, required: true },
  });

const EventModel = model<EventInterface>('Event', eventSchema);

export default EventModel;
