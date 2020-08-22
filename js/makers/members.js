function makeMembers(members) {
  if (!members || members.length == 0) {
    return "";
  }
  return members
    .map(
      (member) =>
        `
        <li class="h5 font-sans text-grey">
        ${member.type}: ${member.name}
        </li>
      `
    )
    .join(" ");
}

export default makeMembers