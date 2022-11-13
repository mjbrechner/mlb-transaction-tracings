'use strict';

// Get information on current date
const today = new(Date);
const day = today.getDate();
const dayString = day.toString().padStart(2, 0);
const month = today.getMonth() + 1;
const monthString = month.toString().padStart(2, 0);
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonthName = monthNames[today.getMonth()];
const year = today.getFullYear();
const lastYear = today.getFullYear() - 1;
const formattedLastYearDate = '' + lastYear + monthString + dayString;
const formattedCurrentDate = '' + year + monthString + dayString;
