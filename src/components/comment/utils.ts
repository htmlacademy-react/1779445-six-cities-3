function formatDateToMonthYear(isoDate: string): string {
  const date = new Date(isoDate);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${month} ${year}`;
}

export default formatDateToMonthYear;
