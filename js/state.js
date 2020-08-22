const EventsState = (() => {
  let _days = []
  let _currentDayId = 0
  return {
    getDays: () => _days.map(day => day),
    setDays: days => (_days = days),
    getId: () => (_currentDayId),
    setId: id => (_currentDayId = id),
  }
})()

export default EventsState