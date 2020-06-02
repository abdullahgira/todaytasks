import React from "react"
import Title from "../elements/Title"
import Link from "../elements/Link"
import Nav from "../elements/Nav"
import CompleteTask from "./CompleteTask"

import moment from "moment"

export default function CompleteTaskList({
    tasks,
    onViewChange,
    addToTodayTasks,
    onDelete,
}) {
    const prevCompleteTasks =
        tasks.filter(
            (t) =>
                moment(t.date).isBefore(moment().format(), "day") && t.complete
        ) || []

    return (
        <React.Fragment>
            <Title>Complete Tasks</Title>
            <Nav>
                <Link onClick={() => onViewChange("today")}>
                    {"< "} Back to today tasks
                </Link>
            </Nav>
            {prevCompleteTasks.map((task) => (
                <CompleteTask
                    key={task.id}
                    task={task}
                    addToTodayTasks={addToTodayTasks}
                    onDelete={onDelete}
                />
            ))}
        </React.Fragment>
    )
}
