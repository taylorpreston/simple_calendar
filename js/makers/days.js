import makeEvents from "./events"
import EventsState from '../state';

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

  const currentDays = EventsState.getDays()
  const currentId = EventsState.getId()
  const currentEvents = currentDays[currentId]
  console.log("CURRENT DAYS:", currentDays)
  console.log("CURRENT ID:", currentId)
  console.log("CURRENT Events:", currentEvents)

  return days
    .map(
      (day) =>
        `<div>
      <p class="h4 p2 m0 bold white bg-blue">${makeDateTitle(day.datetime)}</p>
      ${makeEvents(currentEvents.events)}
    </div>`
    )
    .join(" ");
}


export default makeDays