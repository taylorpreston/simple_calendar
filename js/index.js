console.log("CONNECTED INDEX.JS");
import EventsState from './state';
import makeDays from "./makers/days"
import makeHeader from "./makers/header"
import { fetchDays } from "./requests"
// TODOS
// (X) Tabs functionality - persists ID of tab somewhere / local storage in futute
// (X) Tabs UX/UI responsive blah blah blah all tabs same size / font sizes / Use date time --- maybe date-fn 2.0 package
// (X) Replace speakers with new members from schema
// (X) Dropdown animations
// (X) Arrow locations
// (X) Header
// (X) TAB remove orange
// ___________________________________________________________
// () sponsored by logo, name alt html
// () Dropdown

function handleTabClick(event) {
  const dayId = event.target.id;
  EventsState.setId(dayId);
  const tabs = document.querySelectorAll(".tab-link");
  tabs.forEach((tab) => {
    if (tab.id === dayId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  renderEventsDOM();
}

function handleAccordionClick(event) {
  const closestAccordion = event.target.closest(".accordion");
  
  if (!closestAccordion) {
    return null;
  }

  if (closestAccordion.classList.contains("active")) {
    closestAccordion.classList.remove("active");
    return;
  }

  const allAccordion = document.querySelectorAll(".accordion");

  for (let i = 0; i < allAccordion.length; i++) {
    const accordion = allAccordion[i];
    accordion.classList.remove("active");
  }

  closestAccordion.classList.add("active");
}

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


