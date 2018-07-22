const INITIAL_STATE = { data: [{ value: "Bittrex", label: "Bittrex" }] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'EXCHANGES_FETCHED':
            return { ...state, data: action.payload.data }
        default:
            return state
    }
}