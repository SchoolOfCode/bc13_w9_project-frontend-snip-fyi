/**
 * Creates a string with the current date
 * @returns A formatted string with the current date 01-01-2022
 */
export default function formatDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}-${month}-${year}`;
}
