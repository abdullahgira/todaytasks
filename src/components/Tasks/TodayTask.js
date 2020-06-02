import React from "react"
import Task from "./Task"

export default function TodayTask({ task, triggerComplete }) {
    return (
        <Task>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={task.complete}
                    onChange={() => triggerComplete(task.id)}
                />
                <span className="checkbox-custom circular"></span>
            </label>
            {task.name}
        </Task>
    )
}
