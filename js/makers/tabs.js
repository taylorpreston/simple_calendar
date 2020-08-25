function makeFormatDate(day) {
  if (day.id === "all") {
    return day.datetime;
  }
  return dateFns.format(day.datetime, "ddd, MMM D");
}
function makeTabs(days) {
  if (!days || days.length === 0) {
    return "";
  }
  return days
    .map((day) => {
      return `<button onclick="handleTabClick" id=${day.id} class="tab-link font-sans">${makeFormatDate(day)}</button>`;
    })
    .join(" ");
}

export default makeTabs