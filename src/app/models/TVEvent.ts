import Channel from './Channel';
import { TVEventType } from './TVEventType';

export default interface TVEvent {
  id: string;
  eventType: TVEventType;
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
