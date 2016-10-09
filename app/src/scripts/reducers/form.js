// From Reducer
// =========================

export function firstName(state = "Brandon", action){
    switch(action.type){
        case 'CHANGE_FIRST_NAME':
            return action.firstName
        default:
            return state
    }
}

export function lastName(state = "Chang", action) {
    switch (action.type) {
        case 'CHANGE_LAST_NAME':
            return action.lastName
        default:
            return state
    }
}

export function email(state = "brandondc741@gmail.com", action) {
    switch (action.type) {
        case 'CHANGE_EMAIL':
            return action.email
        default:
            return state
    }
}

export function lawyer(state = "Luis Herrera", action) {
    switch (action.type) {
        case 'CHANGE_LAWYER':
            return action.lawyer
        default:
            return state
    }
}