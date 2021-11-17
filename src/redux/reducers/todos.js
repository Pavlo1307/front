import {ADD_TODOS, PUSH_NEW_TODO, DELETE_TODO, UPDATE_TODO} from "../actionTypes";

const initialState = {
    users: []
}

export const todosReducer = (state = initialState,action)=> {

    switch (action.type){
        case ADD_TODOS:{
            return {
                ...state, users: action.payload
            }
        }

        case PUSH_NEW_TODO: {
            return {
                ...state, users: [...state.users, action.payload]
            }
        }
        case DELETE_TODO:{
            return {

                ...state, users: [...state.users.filter(user => user._id !== action.payload)]
            }
        }
        case UPDATE_TODO:{
            const found = state.users.find(user=> user._id === action.payload._id);

            found.username = action.payload.username;
            found.first_name = action.payload.first_name;
            found.last_name = action.payload.last_name;
            found.email = action.payload.email;

            return {...state}
        }
        default:
            return state
    }
}
