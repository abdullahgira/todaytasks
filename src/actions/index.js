import * as types from "../constants/action-types"

export const addTask = (payload) => ({
    type: types.ADD_TASK,
    payload,
})

export const editTask = (payload) => ({
    type: types.EDIT_TASK,
    payload,
})

export const deleteTask = (payload) => ({
    type: types.DELETE_TASK,
    payload,
})

export const changeVisibleTasks = (payload) => ({
    type: types.CHANGE_VISIBLE_TASKS,
    payload,
})
