import React from "react"
import * as taskTypes from "../constants/task-types"
import { useSelector } from "react-redux"
import Task from "./Task"
import AddTask from "./AddTask"
import { getVisibleTasks, getTaskType } from "../reducers"

export default function TaskList() {
    const { tasks, visibleTasks } = useSelector((state) => state)
    const { tasks: tasksToDisplay } = getVisibleTasks(tasks, visibleTasks)

    return (
        <>
            {visibleTasks === taskTypes.TODAY_TASK && <AddTask />}
            <ul style={{ padding: 0 }}>
                {tasksToDisplay.map((task) => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            type={getTaskType(task)}
                        />
                    )
                })}
            </ul>
        </>
    )
}
