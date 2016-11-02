import { Speaker } from "./speaker";

export interface Session {
  id: number;
  title: string;
  description: string,
  tags: string[];
  speakers?: Speaker[];
  language?: string;
  complexity?: string;
}
