console.log("CONNECTED INDEX.JS");
import EventsState from './state';
import makeDays from "./makers/days"
import makeHeader from "./makers/header"
import { fetchDays } from "./requests"
import { handleTabClick, handleAccordionClick } from "./handlers"

function renderEventsDOM() {
  const currentDays = EventsState.getCurrentDays()
  const eventsHtml = makeDays(currentDays)
  document.getElementById("eventGrid").innerHTML = eventsHtml;
}

function renderTabsDom() {
  const days = EventsState.getDays()
  const headerHtml = makeHeader(days);
  document.getElementById("header").innerHTML = headerHtml;
}

export function render(daysData) {
  EventsState.setDays(daysData)
  renderTabsDom()
  renderEventsDOM()
  document.addEventListener("click", handleAccordionClick);
  document
    .querySelectorAll(".tab-link")
    .forEach((tab) => (tab.onclick = handleTabClick));

}

fetchDays() // render function called in promise responses


