console.log("CONNECTED INDEX.JS");

// TODOS
// X Tabs functionality - persists ID of tab somewhere / local storage in futute
// ) Tabs UX/UI responsive blah blah blah all tabs same size / font sizes / Use date time --- maybe date-fn 2.0 package
// )
// ) Replace speakers with new members from schema
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
    speakers: [
      "Michelle Albert, LPC, CSOTP – Igneous Solutions / Michelle S. Albert, LPC, CSOTP",
      "Ryan Morgan – Law Enforcement",
    ],
  },
  {
    title: "EMS Supervisor Leadership Academy - Part 1",
    start: new Date(2019, 11, 25, 8),
    end: new Date(2019, 11, 25, 11),
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
  { id: 6, datetime: new Date(2019, 11, 25, 8), events: [] },
  { id: 7, datetime: new Date(2019, 11, 25, 8), events: [] },
  { id: 8, datetime: new Date(2019, 11, 25, 8), events: [] },
  { id: 9, datetime: new Date(2019, 11, 25, 8), events: [] },
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

  closestAccordion.classList.add("active");
  console.log("CLOSEST ACC:", closestAccordion);
  console.log("YAY!!!");
}

function makeHeader(days) {
  return `
  <div class="tabs-container flex flex-between">
    ${makeTabs(days)}
  </div>
  `;
}

function makeTabs(days) {
  if (!days || days.length === 0) {
    return "";
  }
  five_days = days.slice(0, 5);
  return five_days
    .map((day) => {
      return `<button onclick="handleTabClick" id=${day.id} class="tab-link font-sans">${day.datetime}</button>`;
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

function makeSpeakers(speakers) {
  if (!speakers || speakers.length == 0) {
    return "";
  }
  return speakers
    .map(
      (speaker) =>
        `
        <li class="h5 font-sans text-grey">
        Speaker: ${speaker}
        </li>
      `
    )
    .join(" ");
}

function makeEventTime(start, end){
  console.log("START", start)
  const startTime = dateFns.format(start, "H:mm")
  const endTime = dateFns.format(end, "H:mm")
  return `${startTime} - ${endTime}`
}

function makeEventRow(event) {
  const events_class = (event.events && "accordion") || "";
  return `
    <div class="p2 border ${events_class}">
      <p class="h4 mb0 mt1 text-dark bold font-sans ">${makeEventTime(event.start, event.end)}</p>
      <p class="h4 mt0 text-dark bold font-sans ">${event.title}</p>
      <div class="list-reset ">
        ${makeSpeakers(event.speakers)}
      </div>
      <div class="flex flex-wrap ">
        ${makeBadges(event.badges)}
      </div>
      <div>
        <i class="fa fa-angle-down"></i>
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

function fullDateFormat(datetime){
  const year = datetime.getFullYear() 
  const date = datetime.getDate() 
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  datetime.getMonth()
  const monthName = month[datetime.getMonth()]
  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]
  const dayName = days[datetime.getDay()]
}

function renderEventsDOM() {
  const eventsHtml = makeEvents(eventData);
  document.getElementById("eventGrid").innerHTML = eventsHtml;
}

const headerHtml = makeHeader(days);

renderEventsDOM();
document.getElementById("header").innerHTML = headerHtml;
document.addEventListener("click", handleAccordionClick);
document
  .querySelectorAll(".tab-link")
  .forEach((tab) => (tab.onclick = handleTabClick));
