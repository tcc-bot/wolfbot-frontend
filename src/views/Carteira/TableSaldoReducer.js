const INITIAL_STATE = {
    saldo: [{moeda: '', quantidade: ''}]
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SALDO_FETCHED':
            const saldoJSON = JSON.stringify(action.payload.data)
            const saldoObjeto = JSON.parse(saldoJSON)
            const saldo = saldoObjeto.data.info.filter(function(e){
                if(e.Balance > 0){
                    return e
                }
            })
            const saldoFinal = saldo.map(function(e){
                return {moeda: e.Currency, quantidade: e.Balance}
            })
            return { ...state, saldo: saldoFinal }
        default:
            return state
    }
}
