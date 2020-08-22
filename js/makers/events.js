import makeArrowIcon from "./arrowIcon"
import makeMembers from "./members"
import makeBadges from "./badges"

function makeEventTime(start, end) {
  const startTime = dateFns.format(start, "H:mm");
  const endTime = dateFns.format(end, "H:mm");
  return `${startTime} - ${endTime}`;
}

function makeEventRow(event) {
  const events_class = (event.events && "accordion") || "";
  makeArrowIcon(event);
  return `
    <div class="p2 border ${events_class}">
      <p class="h4 mb0 mt1 text-dark bold font-sans ">${makeEventTime(
        event.start,
        event.end
      )}</p>
      <p class="h4 mt0 text-dark bold font-sans ">${event.title}</p>
      <div class="list-reset ">
        ${makeMembers(event.members)}
      </div>
      <div class="flex flex-wrap ">
        ${makeBadges(event.badges)}
      </div>
      <div>
        ${makeArrowIcon(event.events)}
      </div>
      <div class="dropdown">
        ${makeEvents(event.events)}
      </div>
    </div>
  `;
}

function makeEvents(events) {
  if (!events || events.length === 0) {
    return "";
  }
  return events.map((event) => makeEventRow(event)).join(" ");
}

export default makeEvents