import { InputJsonValue } from "../../types";

export type MessageCreateInput = {
  body?: string | null;
  gift?: string | null;
  media?: InputJsonValue;
  key?: string | null;
  ownerUid?: number | null;
  typeField?: string | null;
};
