import {generateRandomId} from '../utilities';

/*====================================
  ====== Top Level Form Actions ======
  ====================================*/

export const changeFirstName = (firstName) => {
    return {
        type: 'CHANGE_FIRST_NAME',
        firstName
    }
}

export const changeLastName = (lastName) => {
    return {
        type: 'CHANGE_LAST_NAME',
        lastName
    }
}

export const changeEmail = (email) => {
    return {
        type: 'CHANGE_EMAIL',
        email
    }
}

export const changeLawyer = (lawyer) => {
    return {
        type: 'CHANGE_LAWYER',
        lawyer
    }
}

/*============================
 ====== Ticket actions ======
 ============================*/

export const addTicket = () => {
    return {
        type: 'ADD_TICKET',
        id: generateRandomId()
    }
}

export const deleteTicket = (ticketId) => {
    return {
        type: 'DELETE_TICKET',
        ticketId
    }
}

export const changeCitationNumber = (citationNumber) => {
    return {
        type: 'CHANGE_CITATION_NUMBER',
        citationNumber,
    }
}

export const changeCharge = (charge) => {
    return {
        type: 'CHANGE_CHARGE',
        charge
    }
}

export const changeOutcome = (outcome) => {
    return {
        type: 'CHANGE_OUTCOME',
        outcome
    }
}

export const changeMessageType = (messageType) => {
    return {
        type: 'CHANGE_MESSAGE_TYPE',
        messageType
    }
}

export const addCourtCost = (ticketId) => {
    return {
        type: 'ADD_COURT_COST',
        courtCostId: generateRandomId(),
        ticketId
    }
}

export const changeCourtCost = (courtCostId) => {
    return {
        type: 'CHANGE_COURT_COST',
        courtCostId
    }
}

export const deleteCourtCost = (courtCostId) => {
    return {
        type: 'DELETE_COURT_COST',
        courtCostId
    }
}

/*==============================
  ====== Sentence Actions ======
  ==============================*/

export const addSentence = (ticketId) => {
    return {
        type: 'ADD_SENTENCE',
        sentenceId: generateRandomId(),
        ticketId
    }
}

export const changeSentence = (sentenceId) => {
    return {
        type: 'CHANGE_SENTENCE',
        sentenceId
    }
}

export const deleteSentence = (sentence) => {
    return {
        type: 'DELETE_SENTENCE',
        sentence
    }
}