import makeEvents from "./events"

function makeDateTitle(datetime) {
  if (typeof datetime === "string") {
    return datetime;
  }
  return dateFns.format(datetime, "dddd, MMMM D, 0YYYY");
}

function makeDays(days) {
  if (!days || days.length === 0) {
    return ""
  }
  return days
    .map(
      (day) =>
        `<div>
      <p class="h4 p2 m0 bold white bg-blue">${makeDateTitle(day.datetime)}</p>
      ${makeEvents(day.events)}
    </div>`
    )
    .join(" ");
}


export default makeDays