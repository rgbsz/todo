import { SET_NOTES, ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, actionTypes, stateTypes, noteTypes } from './types'

export const storeReducer = (state: stateTypes = [], action: actionTypes) => {
    switch(action.type) {
        case SET_NOTES:
            return action.payload
        case ADD_NOTE:
            return [...state, action.payload]
        case EDIT_NOTE:
            return state.map((note: noteTypes) => note.id === action.payload.id ? action.payload : note)
        case REMOVE_NOTE:
            return state.filter((note: noteTypes) => note.id !== action.payload)
        default:
            return state
    }
}