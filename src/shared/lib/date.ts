import { Timestamp } from "firebase/firestore";

export function formatDateToString(date?: Date) {
  if (!date) return "";

  const day = String(date.getDate()).padStart(2, "0"); // Get day and add leading zero
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (months from 0, so +1)
  const year = date.getFullYear(); // Get year

  return `${day}.${month}.${year}`; // Format to "DD.MM.YYYY"
}

export function formatStringToDate(dateString?: string) {
  if (!dateString) return new Date();

  const [day, month, year] = dateString.split(".");
  return new Date(`${year}-${month}-${day}`);
}

export function formatStringToFBTimestamp(dateString?: string) {
  if (!dateString) return Timestamp.now();

  const date = new Date(formatStringToDate(dateString));
  return Timestamp.fromDate(date);
}
