const { format } = require("path");

console.log("CONNECTED INDEX.JS");

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

function makeHeader(days) {
  return `
  <div class="tabs-container">
    ${makeTabs(days)}
    <h1 class="">EMS World Expo 2020</h1>
  </div>
  `;
}

function makeTabs(days) {
  if (!days || days.length === 0) {
    return "";
  }
  return days
    .map((day) => {
      let date = "";
      if (typeof day.datetime === "string") {
        date = day.datetime;
      }
      if (typeof day.datetime === "object") {
        date = dateFns.format(day.datetime, "ddd, MMM D");
      }
      return `<button onclick="handleTabClick" id=${day.id} class="tab-link font-sans">${date}</button>`;
    })
    .join(" ");
}

function makeBadges(badges) {
  if (!badges || badges.length === 0) {
    return "";
  }
  return badges
    .map((badge) => {
      return `<p class="badge font-sans ${badge.color}">${badge.name}</p>`;
    })
    .join(" ");
}

function makeMembers(members) {
  if (!members || members.length == 0) {
    return "";
  }
  return members
    .map(
      (member) =>
        `
        <li class="h5 font-sans text-grey">
        ${member.type}: ${member.name}
        </li>
      `
    )
    .join(" ");
}

function makeEventTime(start, end) {
  // console.log("START", start);
  const startTime = dateFns.format(start, "H:mm");
  const endTime = dateFns.format(end, "H:mm");
  return `${startTime} - ${endTime}`;
}

function makeFaIcon(events) {
  if (events && events.length) {
    return `
    <i class="fa fa-angle-down"></i>
    `;
  } else {
    return "";
  }
}

function makeEventRow(event) {
  const events_class = (event.events && "accordion") || "";
  makeFaIcon(event);
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
        ${makeFaIcon(event.events)}
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

function makeDateTitle(datetime) {
  if (typeof datetime === "string") {
    return datetime;
  }
  if (typeof datetime === "object") {
    return dateFns.format(datetime, "dddd, MMMM D, YYYY");
  }
}

function makeDays(days) {
  if (!days || days.length === 0) {
    return "";
  }
  return days
    .map(
      (day) =>
        `<div>
      <p class="h4 p2 m0 bold white bg-blue">${makeDateTitle(day.datetime)}</p>
      ${makeEvents(day.events)}
    </div>`
    )
    .join(" ");
}

function renderEventsDOM() {
  const eventsHtml = makeDays(days);
  document.getElementById("eventGrid").innerHTML = eventsHtml;
}

const headerHtml = makeHeader(days);

renderEventsDOM();
document.getElementById("header").innerHTML = headerHtml;
document.addEventListener("click", handleAccordionClick);
document
  .querySelectorAll(".tab-link")
  .forEach((tab) => (tab.onclick = handleTabClick));
