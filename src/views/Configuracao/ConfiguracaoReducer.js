const exchangeToken = 'exchange_token'
const INITIAL_STATE = {
    exchange_token: {}
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CONFIGURATION_SAVED':
            return { ...state, exchange_token: action.payload.data }
        default:
            return state
    }
}
