import Channel from './Channel';
import { EventType } from './EventType';

export default interface TVEvent {
  eventType: EventType;
  start: Date;
  end: Date;
  duration: number;
  progress: number;
  name: string;
  synopsis?: string;
  classification?: string;
  director?: string;
  interpreters?: string;
  rate?: number;
  imageUrl?: string;
  chapterName?: string;
  channel: Channel;
}
