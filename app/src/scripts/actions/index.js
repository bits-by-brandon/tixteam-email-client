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
        type: 'ADD_TICKET'
    }
}

export const deleteTicket = (ticketId) => {
    return {
        type: 'DELETE_TICKET',
        ticketId
    }
}

export const changeCitationNumber = (ticketIndex, citationNumber) => {
    return {
        type: 'CHANGE_CITATION_NUMBER',
        payload: {
            ticketIndex,
            citationNumber
        }
    }
}

export const changeChargeName = (ticketIndex, chargeName) => {
    return {
        type: 'CHANGE_CHARGE_NAME',
        payload: {
            ticketIndex,
            chargeName
        }
    }
}

export const changeOutcome = (ticketIndex, outcome) => {
    return {
        type: 'CHANGE_OUTCOME',
        payload: {
            ticketIndex,
            outcome
        }
    }
}

export const changeMessageType = (ticketIndex, messageType) => {
    return {
        type: 'CHANGE_MESSAGE_TYPE',
        payload: {
            ticketIndex,
            messageType
        }
    }
}

export const changeCustomMessage = (ticketIndex, customMessage) => {
    return {
        type: 'CHANGE_CUSTOM_MESSAGE',
        payload: {
            ticketIndex,
            customMessage
        }
    }
}

export const changeCourtCost = (ticketIndex, courtCost) => {
    return {
        type: 'CHANGE_COURT_COST',
        payload: {
            ticketIndex,
            courtCost
        }
    }
}

/*==============================
  ====== Sentence Actions ======
  ==============================*/

export const addSentence = (ticketIndex) => {
    return {
        type: 'ADD_SENTENCE',
        payload: {
            sentenceId: generateRandomId(),
            ticketIndex
        }
    }
}

export const changeSentenceType = (sentenceId, type) => {
    return {
        type: 'CHANGE_SENTENCE_TYPE',
        payload: {
            sentenceId,
            isFine: type === 'Fine'
        }
    }
}
export const changeSentenceMessage = (sentenceId, message) => {
    return {
        type: 'CHANGE_SENTENCE_TYPE',
        payload: {
            sentenceId,
            message
        }
    }
}

export const deleteSentence = (sentenceId) => {
    return {
        type: 'DELETE_SENTENCE',
        payload: {
            sentenceId
        }
    }
}
