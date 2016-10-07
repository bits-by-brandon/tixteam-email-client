// Sentence Reducer
// =========================

export default function sentences(state = {
    '23TTPZ9': {
        isFine: true,
        fineAmount: 200,
        message: false
    },
    'I3NOE35': {
        isFine: false,
        fineAmount: false,
        message: 'Client will have to attend 20 hours of driver school'
    }
}, action) {
    switch (action.type) {
        case 'ADD_SENTENCE':
            return state
            // TODO: build proper reducer
        default:
            return state
    }
}
