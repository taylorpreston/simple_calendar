console.log("CONNECTED INDEX.JS");

import makeDays from "./makers/days"
import makeHeader from "./makers/header"

// TODOS
// X Tabs functionality - persists ID of tab somewhere / local storage in futute
// X Tabs UX/UI responsive blah blah blah all tabs same size / font sizes / Use date time --- maybe date-fn 2.0 package
// X Replace speakers with new members from schema
// )
// ) Header
// ) Dropdown animations
// ) Arrow animation and location
var date = new Date();
console.log(date.toLocaleString("en-GB", { timeZone: "UTC" }));

const data = [
  {
    title: "Behavioral Health Workshop for EMS Providers - Part 1",
    start: new Date(2020, 11, 25, 8),
    end: new Date(2020, 11, 25, 10),
    description:
      " I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
      members: [
        {
          type: "Speaker",
          name: "Michelle Albert",
        },
        {
          type: "Speaker",
          name: "Albert",
        },
      ],
  },
  {
    title: "EMS Supervisor Leadership Academy - Part 1",
    start: new Date(2019, 11, 25, 8),
    end: new Date(2019, 11, 25, 11),
    description:
      "I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
    members: [
      {
        type: "Speaker",
        name: "Michelle Albert",
      },
      {
        type: "Speaker",
        name: "Albert",
      },
    ],
    badges: [
      {
        color: "teal",
        name: "Exhibit Hall Events",
      },
      {
        color: "red",
        name: "Exhibit Hall Events",
      },
      {
        color: "green",
        name: "Exhibit Hall Events",
      },
      {
        color: "blue",
        name: "Exhibit Hall Events",
      },
      {
        color: "orange",
        name: "Exhibit Hall Events",
      },
      {
        color: "yellow",
        name: "Exhibit Hall Events",
      },
    ],
  },
  {
    title: "Dropdown event",
    start: new Date(2019, 11, 25, 8),
    end: new Date(2019, 11, 25, 12),
    description:
      "I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
      members: [
        {
          type: "Speaker",
          name: "Michelle Albert",
        },
        {
          type: "Speaker",
          name: "Albert",
        },
      ],
    badges: [
      {
        color: "teal",
        name: "Exhibit Hall Events",
      },
    ],
    events: [
      {
        title: "Dropdown event",
        start: new Date(2020, 8, 10, 8),
        end: new Date(2020, 8, 10, 10),
        description:
          "I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
          members: [
            {
              type: "Speaker",
              name: "Michelle Albert",
            },
            {
              type: "Speaker",
              name: "Albert",
            },
          ],
        badges: [
          {
            color: "blue",
            name: "Some beach somewhere",
          },
        ],
      },
      {
        title: "Dropdown event",
        start: new Date(2020, 8, 10, 8),
        end: new Date(2020, 8, 10, 10),
        description:
          "I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
        speakers: [
          "Michelle Albert, LPC, CSOTP – Igneous Solutions / Michelle S. Albert, LPC, CSOTP",
          "Ryan Morgan – Law Enforcement",
        ],
        badges: [
          {
            color: "blue",
            name: "Some beach somewhere",
          },
        ],
      },
    ],
  },
  {
    title: "Dropdown event",
    start: new Date(2019, 11, 25, 8),
    end: new Date(2019, 11, 25, 12),
    description:
      "I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
    speakers: [
      "Michelle Albert, LPC, CSOTP – Igneous Solutions / Michelle S. Albert, LPC, CSOTP",
      "Ryan Morgan – Law Enforcement",
    ],
    badges: [
      {
        color: "teal",
        name: "Exhibit Hall Events",
      },
    ],
    events: [
      {
        title: "Dropdown event",
        start: new Date(2020, 8, 10, 8),
        end: new Date(2020, 8, 10, 10),
        description:
          "I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
        speakers: [
          "Michelle Albert, LPC, CSOTP – Igneous Solutions / Michelle S. Albert, LPC, CSOTP",
          "Ryan Morgan – Law Enforcement",
        ],
        badges: [
          {
            color: "blue",
            name: "Some beach somewhere",
          },
        ],
      },
      {
        title: "Dropdown event",
        start: new Date(2020, 8, 10, 8),
        end: new Date(2020, 8, 10, 10),
        description:
          "I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
        speakers: [
          "Michelle Albert, LPC, CSOTP – Igneous Solutions / Michelle S. Albert, LPC, CSOTP",
          "Ryan Morgan – Law Enforcement",
        ],
        badges: [
          {
            color: "blue",
            name: "Some beach somewhere",
          },
        ],
      },
    ],
  },
];

const testEvents = (day) => {
  return data.map((event) => {
    return {
      ...event,
      title: `${day} ${event.title}`,
    };
  });
};

let days = [
  { id: 0, datetime: "All Days", events: data },
  { id: 1, datetime: new Date(2019, 11, 25, 8), events: testEvents("MONDAY") },
  { id: 2, datetime: new Date(2019, 11, 25, 8), events: [] },
  { id: 3, datetime: new Date(2019, 11, 25, 8), events: [] },
  { id: 4, datetime: new Date(2019, 11, 25, 8), events: [] },
];

let dayId = 0;
let eventData = days[0].events;

function updateEventsData() {
  eventData = days[dayId].events;
  console.log(eventData);
}

function handleTabClick(event) {
  dayId = event.target.id;
  const tabs = document.querySelectorAll(".tab-link");
  tabs.forEach((tab) => {
    if (tab.id === dayId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  updateEventsData();
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
  const eventsHtml = makeDays(days)
  document.getElementById("eventGrid").innerHTML = eventsHtml;
}

const headerHtml = makeHeader(days);

renderEventsDOM();
document.getElementById("header").innerHTML = headerHtml;
document.addEventListener("click", handleAccordionClick);
document
  .querySelectorAll(".tab-link")
  .forEach((tab) => (tab.onclick = handleTabClick));
