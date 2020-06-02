import React from "react"
import Task from "./Task"

export default function PrevTask({ task, addToTodayTasks }) {
    return (
        <Task>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={task.complete}
                    onChange={() => addToTodayTasks(task)}
                />
                <span className="checkbox-custom circular"></span>
            </label>
            {task.name}
        </Task>
    )
}
