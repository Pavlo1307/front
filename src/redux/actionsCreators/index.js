import {ADD_TODOS, DELETE_TODO, PUSH_NEW_TODO} from "../actionTypes";

export const addTodo = (payload) =>({type:ADD_TODOS, payload})
export const pushNewTodo = (payload) =>({type:PUSH_NEW_TODO, payload})
export const delTodo = (payload) =>({type:DELETE_TODO,payload})
