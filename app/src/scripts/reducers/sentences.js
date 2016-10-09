// Sentence Reducer
// =========================

const defaultSentence = {
    isFine: false,
    fineAmount: 0,
    message: false
}

export default function sentencesById(state = {
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
            // TODO: build proper reducer
            return {
                ...state,
                [action.payload.sentenceId]: {...defaultSentence}
            }
        default:
            return state
    }
}
