function makeBadges(badges) {
  if (!badges || badges.length === 0) {
    return "";
  }
  return badges
    .map((badge) => {
      return `<p class="badge font-sans ${badge.color}">${badge.name}</p>`;
    })
    .join(" ");
}

export default makeBadges