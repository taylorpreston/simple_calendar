import makeTabs from "./tabs"

function makeHeader(days) {
  return `
  <div class="tabs-container">
    ${makeTabs(days)}
    <h1 class="">EMS World Expo 2020</h1>
  </div>
  `;
}

export default makeHeader