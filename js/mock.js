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
      sponsor: {
        logo_url: "https://i1.wp.com/realestatebossmamas.com/wp-content/uploads/2018/02/logo-placeholder-1.png?fit=200%2C200",
        name: "thing",
       }
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
    sponsor: {
      logo_url: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg",
      name: "thing",
     },
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

export default days