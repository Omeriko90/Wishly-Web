import { Dayjs } from "dayjs";

export default interface List {
  _id: string;
  title: string;
  description: string;
  owner: string;
  date: Dayjs;
  type: string;
}
