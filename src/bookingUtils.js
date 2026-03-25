export function initializeTimes() {
  return window.fetchAPI(new Date());
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_DATE':
      return window.fetchAPI(new Date(action.date));
    default:
      return state;
  }
}