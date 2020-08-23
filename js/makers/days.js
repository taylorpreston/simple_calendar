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
  const currentDay = currentDays[currentId]

  return (
    `<div>
      <p class="h4 p2 m0 bold white bg-blue">${makeDateTitle(currentDay.datetime)}</p>
      ${makeEvents(currentDay.events)}
    </div>`
  )
}


export default makeDays