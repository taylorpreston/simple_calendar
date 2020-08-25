import makeTabs from "./tabs";

function makeHeader(days) {
  return `
    <div class="tabs-container">
      ${makeTabs(days)}
    </div>
    <h1 class="m0 p2 text-dark">EMS World Expo 2020</h1>
  `;
}

export default makeHeader;
