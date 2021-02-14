// To Convert 12-hour AM/PM format to (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock
// Input Data - "07:05:45PM" ;
// Output - 19:05:45
// Explanation - Since the input time is in PM -> It adds 12 to the hh (i.e 07 + 12 = 19)

// SOURCE CODE
function timeConversion(s) {
  // To extract the time format
  const am_or_pm = s.slice(-2);
  const hours = Number(s.slice(0, 2));
  let time = s.slice(0, -2);
  if (am_or_pm === "AM") {
    if (hours === 12) {
      // 12am edge-case
      return time.replace(s.slice(0, 2), "00");
    }
    return time;
  } else if (am_or_pm === "PM") {
    if (hours !== 12) {
      return time.replace(s.slice(0, 2), String(hours + 12).slice(0, 2));
    }
    // 12pm edge-case
    return time;
  }
  return "Error: AM/PM format is not valid";
}
console.log(timeConversion("07:05:45PM"));
