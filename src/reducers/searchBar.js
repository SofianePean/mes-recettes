import { CHANGE_FIELD_VALUE } from '../actions/searchBar';

const initialState = {
    inputValue: ''
}

export const searchBar = (state = initialState, action = {}) => {
    switch(action.type) {
        case CHANGE_FIELD_VALUE :
            return {
                ...state,
                inputValue: action.value
            }
        default:
           return state;
    }
}