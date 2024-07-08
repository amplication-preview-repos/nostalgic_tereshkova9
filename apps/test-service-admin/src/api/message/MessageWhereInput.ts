import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  body?: StringNullableFilter;
  gift?: StringNullableFilter;
  media?: JsonFilter;
  key?: StringNullableFilter;
  ownerUid?: IntNullableFilter;
  typeField?: StringNullableFilter;
};
