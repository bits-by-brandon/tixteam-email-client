import {combineReducers} from 'redux';

import * as topLevelReducers from './form';
import sentences from './sentences';
import tickets from './tickets';

/*===========================
 ====== Default State ======
 ===========================*/

const initialState = {
    firstName: "Brandon",
    lastName: "Chang",
    email: "brandondc741@gmail.com",
    lawyer: "Luis Herrera",
    dispoType: 'civil',
    tickets: {
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
    },
    sentences: {
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
    },
    outcomeMessage: {
        dismissed: "Congratulations! Your charges were dropped. That means no fines, no school, and no points on your record.",
        withold: "We were able to keep a conviction and points off of your record. Below are the conditions imposed by the court.",
        adjudicated: "We are sorry, you were found guilty by the state. You will have to serve the sentence as stated below."
    },
    outcomeCopy: {
        dismissed: "Thank you for trusting us to handle your case. Luis Herrera and the Tix Team were able to get your case dismissed! No Fines, No Points, No Traffic Class – Totally dismissed!",
        withold: "These sentences must be completed by the date specified. Failure complete the sentences may result in a larger legal penalty.",
        adjudicated: "These sentences must be completed by the date specified. Failure complete the sentences may result in a larger legal penalty."
    }
}

/*==========================
 ====== Root Reducer ======
 ==========================*/

const reducers = Object.assign(topLevelReducers, sentences, tickets);

const emailClientApp = combineReducers(reducers);

export default emailClientApp;
