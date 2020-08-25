import makeArrowIcon from "./arrowIcon";
import makeMembers from "./members";
import makeBadges from "./badges";
import makeSponsor from "./sponsor";

function makeEventTime(start, end) {
  const startTime = dateFns.format(start, "H:mm");
  const endTime = dateFns.format(end, "H:mm");
  return `${startTime} - ${endTime}`;
}

function makeEventRow(event, isDropdown) {
  const events_class = (event.events && "accordion") || "";
  const dropdown_class = (isDropdown && "panel") || "";
  const sponsor_class = (event.sponsor && "sponsor") || "hidden";
  return `
    <div class="grid-border ${events_class} ${dropdown_class}">
      <div class="flex p2">
        <div class="flex-auto">
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
        </div>
        <div class="${sponsor_class} flex flex-column self-center mr3">
            ${makeSponsor(event.sponsor)}
        </div>
        <div class="self-center">
          ${makeArrowIcon(event.events)}
        </div>
      </div>
      <div class="dropdown">
        ${makeEvents(event.events, true)}
      </div>
    </div>
  `;
}

function makeEvents(events, isDropdown = false) {
  if (!events || events.length === 0) {
    return "";
  }
  return events
    .map((event) => {
      return makeEventRow(event, isDropdown);
    })
    .join(" ");
}

export default makeEvents;
