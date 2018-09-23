const userKey = 'user_bot'
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false,
  passwordRecovery: false,
  registerSuccess: false,
  changePasswordPermition: true,
  changePasswordHash: '',
  passwordChanged: false
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOKEN_VALIDATED':
      if (action.payload) {
        return { ...state, validToken: true }
      } else {
        localStorage.removeItem(userKey)
        localStorage.removeItem('exchange_bot')
        return { ...state, validToken: false, user: null }
      }
    case 'USER_FETCHED':
      localStorage.setItem(userKey, JSON.stringify(action.payload))
      return { ...state, user: action.payload, validToken: true, registerSuccess: false }
    case 'REGISTER_SUCCESS':
      return { ...state, registerSuccess: true }
    case 'PASSWORD_RECOVERY':
      if (action.payload) {
        return { ...state, passwordRecovery: action.payload }
      }
      break
    case 'PAGE_LOGIN_UPDATED':
      return { ...state, passwordRecovery: action.payload, registerSuccess: false }
    case 'CHANGE_PASSWORD_CONFIRM':
      if (action.payload.success) {
        return { ...state, changePasswordPermition: true, changePasswordHash: action.payload.hash }
      } else {
        return { ...state, changePasswordPermition: false, changePasswordHash: null }
      }
    case 'LOAD_SESSSION_USER':
      return { ...state, user: action.payload }
    case 'CHANGE_PASSWORD_DENIED':
      return { ...state, changePasswordPermition: false, changePasswordHash: null }
    case 'PASSWORD_CHANGED':
      return { ...state, passwordChanged: true }
    default:
      return state
  }
}
