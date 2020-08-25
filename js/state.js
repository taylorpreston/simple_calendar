const EventsState = (() => {
  let _days = [];
  let _currentDayId = "all";

  const _getCurrentDays = () => {
    if(_currentDayId !== "all"){
      return _days.filter(day => day.id === parseInt(_currentDayId))
    }
    return _days
  }

  const _getDays = () => {
    const allDays = [{ id: "all", datetime: "All Days"  }].concat(_days)
    return allDays
  }

  return {
    getDays: _getDays,
    setDays: (days) => (_days = days),
    getId: () => _currentDayId,
    setId: (id) => (_currentDayId = id),
    getCurrentDays:  _getCurrentDays,
  };
})();

export default EventsState;
