const data = [
  {
    title: "Dropdown event",
    start: new Date(2019, 11, 25, 8),
    end: new Date(2019, 11, 25, 12),
    sponsor: {
      logo_url: "https://www.uschamberfoundation.org/sites/default/files/styles/detail_image800w/public/Pfizer%20Logo.gif?itok=PTpWwMuM",
      name: "Pfizer",
    },
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

const days = [
  { id: 0, datetime: "All Days", events: data },
  { id: 1, datetime: new Date(2019, 11, 23, 8), events: testEvents("MONDAY") },
  { id: 2, datetime: new Date(2019, 11, 24, 8), events: testEvents("TUESDAY") },
  { id: 3, datetime: new Date(2019, 11, 25, 8), events: testEvents("WEDNESDAY") },
  { id: 4, datetime: new Date(2019, 11, 26, 8), events: testEvents("THURSDAY") },
];

module.exports.days = days