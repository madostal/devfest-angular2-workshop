import { Speaker } from "./Speaker";

export interface Session {
  id: number;
  title: string;
  tags: string[],
  speakers?: Speaker[]
}
