let dt = 1780730333;
const curDate = new Date(dt * 1000); // Convert seconds to milliseconds
// console.log(curDate);



const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const formatter = new Intl.DateTimeFormat("en-US", options);


// console.log(formatter);
const formattedDate = formatter.format(curDate);
console.log(formattedDate);
