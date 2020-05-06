import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM} from './actionTypes'

export const getInputChangeAction = (value)=>({
    type :CHANGE_INPUT_VALUE,
    value
});

export const getAddTodoItemAction = ()=>({
    type :ADD_TODO_ITEM
});

export const getDelTodoItemAction = (index)=>({
    type :DEL_TODO_ITEM,
    index
});