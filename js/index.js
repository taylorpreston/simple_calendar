console.log("CONNECTED INDEX.JS")

const data = [
  {
    title: "Behavioral Health Workshop for EMS Providers - Part 1",
    start: "8:30",
    end: "9:30",
    description: " I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
    speakers: ["Michelle Albert, LPC, CSOTP – Igneous Solutions / Michelle S. Albert, LPC, CSOTP", "Ryan Morgan – Law Enforcement"]
  },
  {
    title: "EMS Supervisor Leadership Academy - Part 1",
    start: "8:00",
    end: "10:00",
    description: "I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
    speakers: ["Michelle Albert, LPC, CSOTP – Igneous Solutions / Michelle S. Albert, LPC, CSOTP", "Ryan Morgan – Law Enforcement"],
    badges: [{
      color: "teal",
      name: "Exhibit Hall Events"
    }]
  },
  {
    title: "Dropdown event",
    start: "8:00",
    end: "10:00",
    description: "I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
    speakers: ["Michelle Albert, LPC, CSOTP – Igneous Solutions / Michelle S. Albert, LPC, CSOTP", "Ryan Morgan – Law Enforcement"],
    badges: [{
      color: "teal",
      name: "Exhibit Hall Events"
    }],
    events: [{
      title: "Dropdown event",
      start: "8:00",
      end: "10:00",
      description: "I am a really long description of a thing that is going to an event that people are going to come to and it should be fun.",
      speakers: ["Michelle Albert, LPC, CSOTP – Igneous Solutions / Michelle S. Albert, LPC, CSOTP", "Ryan Morgan – Law Enforcement"],
      badges: [{
        color: "teal",
        name: "Exhibit Hall Events"
      }],
    }]
  },
]

function makeBadges(badges) {
  if (!badges || badges.length === 0) {
    return ""
  }
  return badges.map(badge => {
    return `<p class="badge font-sans ${badge.color}">${badge.name}</p>`
  }).join(" ")
}

function makeSpeakers(speakers) {
  if (!speakers || speakers.length == 0) {
    return ""
  }
  return speakers.map(speaker => ((
    `<li class="h6 font-sans">
      Speaker: ${speaker}
    </li>`
    ))
  ).join(" ")
}

function makeEventRow(event) {
  return (
  `<div class="flex border p2">
    <div class="col-12">
      <p class="h4 mb0 font-sans">${event.start} - ${event.end}</p>
      <p class="h5 font-sans">${event.title}</p>
      <div class="list-reset">
        ${makeSpeakers(event.speakers)}
      </div>
      <div class="flex">
        ${makeBadges(event.badges)}
      </div>
      <div>
        ${makeEvents(event.events)}
      </div>
    </div>
  </div>`
  )
}

function makeEvents(events) {
  if (!events || events.length === 0) {
    return ""
  }
  return events.map(event => makeEventRow(event)).join(" ")
}

const eventsHtml = makeEvents(data)


document.getElementById("eventGrid").innerHTML = eventsHtml