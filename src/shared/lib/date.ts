import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Timestamp } from "firebase/firestore";

const DATE_INPUT_FORMAT = "DD.MM.YYYY";
const DATE_READABLE_FORMAT = "D MMMM YYYY";

dayjs.extend(customParseFormat);

export function formatDateToString(date?: Date): string {
  if (!date) return "";

  const formattedDate = dayjs(date).format(DATE_INPUT_FORMAT);
  return formattedDate;
}

export function formatStringToFBTimestamp(dateString?: string): Timestamp {
  if (!dateString) return Timestamp.now();

  const date = dayjs(dateString, DATE_INPUT_FORMAT).toDate();
  return Timestamp.fromDate(date);
}

export function formatTimestampToReadableDate(timestamp?: Timestamp): string {
  if (!timestamp) return "";

  const date = dayjs(timestamp.toDate());
  return date.format(DATE_READABLE_FORMAT);
}
