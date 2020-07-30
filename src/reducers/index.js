import { combineReducers } from "redux"
import * as actionTypes from "../constants/action-types"
import * as taskTypes from "../constants/task-types"
import moment from "moment"

const byId = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return {
                ...state,
                [action.payload.id]: {
                    id: action.payload.id,
                    name: action.payload.name,
                    complete: false,
                    date: moment(),
                },
            }
        case actionTypes.TOGGLE_COMPLETE:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    complete: !state[action.payload.id].complete,
                },
            }
        case actionTypes.EDIT_TASK:
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    name: action.payload.name,
                },
            }
        case actionTypes.DELETE_TASK:
            return {
                ...state,
                [action.payload.id]: undefined,
            }
        default:
            return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return [...state, action.payload.id]
        case actionTypes.DELETE_TASK:
            return state.filter((id) => id !== action.payload.id)
        default:
            return state
    }
}

const tasks = combineReducers({
    byId,
    allIds,
})

const visibleTasks = (state = taskTypes.TODAY_TASK, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_VISIBLE_TASKS:
            return action.payload
        default:
            return state
    }
}

const getAllTasks = (state) => state.allIds.map((id) => state.byId[id])

export const getVisibleTasks = (tasks, visibleTasks) => {
    const allTasks = getAllTasks(tasks)
    switch (visibleTasks) {
        case taskTypes.TODAY_TASK:
            return {
                tasks: allTasks.filter((t) =>
                    moment(t.date).isSame(moment(), "day")
                ),
            }
        case taskTypes.OLD_COMPLETE_TASK:
            return {
                tasks: allTasks.filter(
                    (t) =>
                        moment(t.date).isBefore(moment().format(), "day") &&
                        t.complete
                ),
            }
        case taskTypes.OLD_INCOMPLETE_TASK:
            return {
                tasks: allTasks.filter(
                    (t) =>
                        moment(t.date).isBefore(moment().format(), "day") &&
                        !t.complete
                ),
            }
        default:
            return tasks
    }
}

export const getTaskType = (task) => {
    if (moment(task.date).isBefore(moment().format(), "day") && task.complete)
        return taskTypes.OLD_COMPLETE_TASK
    else if (
        moment(task.date).isBefore(moment().format(), "day") &&
        !task.complete
    )
        return taskTypes.OLD_INCOMPLETE_TASK
    else return taskTypes.TODAY_TASK
}

export default combineReducers({
    tasks,
    visibleTasks,
})
