console.log("CONNECTED INDEX.JS");
import EventsState from './state';
import makeDays from "./makers/days"
import makeHeader from "./makers/header"
import { fetchDays } from "./requests"

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

function removeLoader() {
  const loader = document.querySelector('.spinner')
  loader.style.display = 'none'
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

export function renderError() {
  removeLoader()
  const errorDOM = (
    `<div class="overflow-auto font-sans text-red fit center bg-red border-red m2">
      <p class="h3 mb1">There was an error loading your events:</p>
      <li class="h3 pb2">Reload and try again.</li>
    </div>`
  )
  document.getElementById("error").innerHTML = errorDOM
}

export function render(daysData) {
  EventsState.setDays(daysData)
  removeLoader()
  renderTabsDom()
  renderEventsDOM()
  document.addEventListener("click", handleAccordionClick)
  document
    .querySelectorAll(".tab-link")
    .forEach((tab) => (tab.onclick = handleTabClick))

}

fetchDays() // render function called in promise responses


