import makeEvents from "./events"
import EventsState from '../state';

function makeDateTitle(day) {
  if (day.id === "all") {
    return day.datetime;
  }
  return dateFns.format(day.datetime, "dddd, MMMM D, YYYY");
}

function makeDay(day) {
  if (!day || day.length === 0) {
    return ""
  }
  
  const events = makeEvents(day.events)

  return (
    `<div>
      <p class="h4 p2 m0 bold white bg-blue">${makeDateTitle(day)}</p>
      ${makeEvents(day.events)}
    </div>`
  )
}

function makeDays(days) {
  return days.map(day => makeDay(day)).join(" ")
}


export default makeDays