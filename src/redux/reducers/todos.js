import {ADD_TODOS, PUSH_NEW_TODO, DELETE_TODO} from "../actionTypes";

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
                ...state, users: [...state.todos, action.payload]
            }
        }
        case DELETE_TODO:{
            return {

                ...state, users: [...state.todos.filter(todo => todo.id !== action.payload)]
            }
        }
        default:
            return state
    }
}
