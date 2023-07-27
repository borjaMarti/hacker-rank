// Time Conversion

// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
  const meridian = s.slice(8);
  const hour = +s.slice(0, 2);
  let time;

  switch (meridian) {
    case "AM":
      if (hour === 12) {
        time = `00${s.slice(2, 8)}`;
      } else {
        time = s.slice(0, 8);
      }
      break;
    case "PM":
      if (hour === 12) {
        time = s.slice(0, 8);
      } else {
        time = `${hour + 12}${s.slice(2, 8)}`;
      }
      break;
    default:
      return "Wrong input format!";
  }

  return time;
}
