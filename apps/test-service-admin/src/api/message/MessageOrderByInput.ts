import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  body?: SortOrder;
  gift?: SortOrder;
  media?: SortOrder;
  key?: SortOrder;
  ownerUid?: SortOrder;
  typeField?: SortOrder;
};
