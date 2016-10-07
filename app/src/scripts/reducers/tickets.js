// Ticket Reducer
// =========================

export default function tickets(state = {
    '9462BS2': {
        citationNumber: "A69MQ0E",
        chargeName: "Speeding",
        chargeDate: new Date(),
        outcome: "dismissed",
        copy: "standard",
        customCopy: null,
        courtCost: false,
        sentences: false,
        date: null,
    },
    '3MO2F93': {
        citationNumber: "A52DAXJ",
        chargeName: "Reckless Driving",
        chargeDate: new Date(),
        outcome: "withold",
        copy: "standard",
        customCopy: null,
        courtCost: 30,
        sentences: {
            '23TTPZ9': true,
            'I3NOE35': true
        },
    }
}, action) {
    switch (action.type) {
        case 'CHANGE_FIRST_NAME':
            return Object.assign({}, state, {
                firstName: action.firstName
            })
        case 'CHANGE_LAST_NAME':
            return Object.assign({}, state, {
                lastName: action.lastName
            })
        case 'CHANGE_EMAIL':
            return Object.assign({}, state, {
                email: action.email
            })
        case 'CHANGE_LAWYER':
            return Object.assign({}, state, {
                lawyer: action.lawyer
            })
        default:
            return state
    }
}
