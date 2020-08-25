import EventsState from "../state";

function makeFormatDate(day) {
  if (day.id === "all") {
    return day.datetime;
  }
  return dateFns.format(day.datetime, "ddd, MMM D");
}

function makeTabs(days) {
  if (!days || days.length === 0) {
    return "";
  }
  return days
    .map((day) => {
      let id = EventsState.getId()
      let active_class = ""
      if(day.id === id ){active_class = "active"}
      return `<button id=${day.id} class="tab-link font-sans ${active_class}">${makeFormatDate(day)}</button>`;
    })
    .join(" ");
}

export default makeTabs