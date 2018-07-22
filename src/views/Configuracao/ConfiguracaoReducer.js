const exchangeToken = 'exchange_token'
const INITIAL_STATE = {
    exchangeToken: JSON.parse(localStorage.getItem(exchangeToken))
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CONFIGURATION_SAVED':
            localStorage.setItem(exchangeToken, JSON.stringify(action.payload))
            return { ...state, exchange: action.payload.data }
        default:
            return state
    }
}
