// Ticket Reducer
// =========================
const emptyTicket = {
    citationNumber: '',
    chargeName: '',
    chargeDate: new Date(),
    outcome: '',
    messageType: '',
    customMessage: '',
    courtCost: 0.00,
    sentences: {},
    sentenceDueDate: ''
}

export default function tickets(state = [
    {
        citationNumber: "A69MQ0E",
        chargeName: "Speeding",
        chargeDate: new Date(),
        outcome: "dismissed",
        messageType: "standard",
        customMessage: '',
        courtCost: 0.00,
        sentences: {},
    },
   {
        citationNumber: "A52DAXJ",
        chargeName: "Reckless Driving",
        chargeDate: new Date(),
        outcome: "withold",
        messageType: "standard",
        customMessage: '',
        courtCost: 30,
        sentences: {
            '23TTPZ9': true,
            'I3NOE35': true
        }
    }
], action) {
    switch (action.type) {
        case 'ADD_TICKET':
            return state.concat(emptyTicket)
        case 'CHANGE_CITATION_NUMBER':
            var newTickets = state;
            newTickets[action.payload.ticketIndex] = {
                ...state[action.payload.ticketIndex],
                citationNumber: action.payload.citationNumber.toUpperCase()
            }
            return newTickets
        case 'CHANGE_CHARGE_NAME':
            var newTickets = state;
            newTickets[action.payload.ticketIndex] = {
                ...state[action.payload.ticketIndex],
                chargeName: action.payload.chargeName
            }
            return newTickets
        case 'CHANGE_OUTCOME':
            var newTickets = state;
            newTickets[action.payload.ticketIndex] = {
                ...state[action.payload.ticketIndex],
                outcome: action.payload.outcome
            }
            return newTickets
        case 'CHANGE_MESSAGE_TYPE':
            var newTickets = state;
            newTickets[action.payload.ticketIndex] = {
                ...state[action.payload.ticketIndex],
                messageType: action.payload.messageType
            }
            return newTickets
        case 'CHANGE_CUSTOM_MESSAGE':
            var newTickets = state;
            newTickets[action.payload.ticketIndex] = {
                ...state[action.payload.ticketIndex],
                customMessage: action.payload.customMessage
            }
            return newTickets
        case 'CHANGE_COURT_COST':
            var newTickets = state;
            newTickets[action.payload.ticketIndex] = {
                ...state[action.payload.ticketIndex],
                courtCost: action.payload.courtCost
            }
            return newTickets
        case 'ADD_SENTENCE':
            var newTickets = state,
                ticketIndex = action.payload.ticketIndex;
            newTickets[ticketIndex] = {
                ...state[ticketIndex],
                sentences: {
                    ...state[ticketIndex].sentences,
                    [action.payload.sentenceId]: true
                }
            }
            return state
        default:
            return state
    }
}
