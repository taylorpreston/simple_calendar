console.log("CONNECTED INDEX.JS");
import EventsState from './state';
import makeDays from "./makers/days"
import makeHeader from "./makers/header"
import days from "./mock"
// TODOS
// X Tabs functionality - persists ID of tab somewhere / local storage in futute
// X Tabs UX/UI responsive blah blah blah all tabs same size / font sizes / Use date time --- maybe date-fn 2.0 package
// X Replace speakers with new members from schema
// )
// ) Header
// ) Dropdown animations
// ) Arrow animation and locations

function handleTabClick(event) {
  const dayId = event.target.id;
  EventsState.setId(dayId)
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

  // For loop to remove active class from any opened
  const allAccordion = document.querySelectorAll(".accordion");

  for (let i = 0; i < allAccordion.length; i++) {
    const accordion = allAccordion[i];
    accordion.classList.remove("active");
  }

  closestAccordion.classList.add("active");
}


function renderEventsDOM() {
  console.log("RENDER EVENTS DOM")
  const eventsHtml = makeDays(days)
  document.getElementById("eventGrid").innerHTML = eventsHtml;
}

EventsState.setDays(days)
EventsState.setId(0)

const headerHtml = makeHeader(days);

renderEventsDOM();
document.getElementById("header").innerHTML = headerHtml;
document.addEventListener("click", handleAccordionClick);
document
  .querySelectorAll(".tab-link")
  .forEach((tab) => (tab.onclick = handleTabClick));
