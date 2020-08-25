function makeArrowIcon(events) {
  if (events && events.length) {
    return `
    <i" class="fa fa-angle-down"></i>
    `;
  }else{
    return ""
  }
}

export default makeArrowIcon
