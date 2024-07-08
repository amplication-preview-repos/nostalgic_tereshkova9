import { JsonValue } from "type-fest";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  body: string | null;
  gift: string | null;
  media: JsonValue;
  key: string | null;
  ownerUid: number | null;
  typeField: string | null;
};
