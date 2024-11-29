import {FieldType} from "./FieldType";

export interface Field {
  id: number;
  name: string;
  timeslotDuration: number;
  openTime: string;
  closeTime: string;
  type: FieldType;
}
