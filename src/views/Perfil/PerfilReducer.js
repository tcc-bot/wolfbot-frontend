const INITIAL_STATE = {
  openProfile: false
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PROFILE':
      if (action.payload) {
        return { ...state, openProfile: true }
      } else {

        return state
      }
    default:
      return state
  }
}
