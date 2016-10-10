// Sentence Reducer
// =========================

const defaultSentence = {
    isFine: false,
    fineAmount: 0,
    message: ''
}

//noinspection SpellCheckingInspection
export default function sentencesById(state = {
    '23TTPZ9': {
        id: '23TTPZ9',
        isFine: true,
        fineAmount: 200.00,
        message: ''
    },
    'I3NOE35': {
        id: 'I3NOE35',
        isFine: false,
        fineAmount: 0.00,
        message: 'Client will have to attend 20 hours of driver school'
    }
}, action) {
    switch (action.type) {
        case 'ADD_SENTENCE':
            return {
                ...state,
                [action.payload.sentenceId]: {
                    id: action.payload.sentenceId,
                    ...defaultSentence
                }
            }
        case 'CHANGE_SENTENCE_TYPE':
            return {
                ...state,
                [action.payload.sentenceId]: {
                    ...state[action.payload.sentenceId],
                    isFine: action.payload.isFine
                }
            }
        case 'CHANGE_SENTENCE_FINE':
            return {
                ...state,
                [action.payload.sentenceId]: {
                    ...state[action.payload.sentenceId],
                    fineAmount: parseFloat(action.payload.fineAmount)
                }
            }
        case 'CHANGE_SENTENCE_MESSAGE':
            return {
                ...state,
                [action.payload.sentenceId]: {
                    ...state[action.payload.sentenceId],
                    message: action.payload.message
                }
            }
        default:
            return state
    }
}
