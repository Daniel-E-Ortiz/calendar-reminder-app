export const today = new Date();
export const currentMonth = today.getMonth(); // Returns the month (0-11)
export const currentYear = today.getFullYear(); // Returns the year (four digits)

export const currentMonthName = [
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
    'December',
][currentMonth];

export const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // Returns the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
export const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tueday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
export const firstDayOfWeekName = daysOfTheWeek[firstDayOfWeek];

export const numDaysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
).getDate(); // Returns the number of days in the month

console.log(`This month is ${currentMonthName}.`);
console.log(`${currentMonthName} starts on a ${firstDayOfWeekName}.`);
console.log(`There are ${numDaysInMonth} days in ${currentMonthName}.`);
