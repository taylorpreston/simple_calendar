function makeTabs(days) {
  if (!days || days.length === 0) {
    return "";
  }
  return days
    .map((day) => {
      const date = dateFns.format(day.datetime, "ddd, MMM D");
      return `<button onclick="handleTabClick" id=${day.id} class="tab-link font-sans">${date}</button>`;
    })
    .join(" ");
}

export default makeTabs