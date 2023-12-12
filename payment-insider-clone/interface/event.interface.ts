// event.interface.ts

import { Document } from 'mongoose';

enum Language {
  English = 'English',
  Hindi = 'Hindi',
  Bengali = 'Bengali',
  Marathi = 'Marathi',
  Telegu = 'Telegu',
  Tamil = 'Tamil',
}

enum Category {
  ComedyShow = 'Comedy Show',
  Workshops = 'Workshops',
  MusicShow = 'Music Show',
  OnlineStreamingEvents = 'Online Streaming Events',
  Meetup = 'Meetup',
  Performance = 'Performance',
  Kids = 'Kids',
}

interface Event extends Document {
  eventName: string;
  description: string;
  language: Language;
  duration: string;
  time: string;
  category: Category;
  price: number;
  location: string;
  artists: string[];
  softDelete: boolean;
  createdAt: Date;
  venue: string;
}

export default Event;
