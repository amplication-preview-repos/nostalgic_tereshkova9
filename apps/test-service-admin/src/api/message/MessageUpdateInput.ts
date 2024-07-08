import { InputJsonValue } from "../../types";

export type MessageUpdateInput = {
  body?: string | null;
  gift?: string | null;
  media?: InputJsonValue;
  key?: string | null;
  ownerUid?: number | null;
  typeField?: string | null;
};
