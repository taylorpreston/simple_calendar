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

export default makeSpeakers