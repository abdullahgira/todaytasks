import React from "react"
import Title from "../elements/Title"
import Link from "../elements/Link"
import Nav from "../elements/Nav"

import moment from "moment"
import Task from "./Task"

export default function PrevTaskList({
    tasks,
    onViewChange,
    addToToday,
    onDelete,
    onEdit,
}) {
    const prevTasks =
        tasks.filter(
            (t) =>
                moment(t.date).isBefore(moment().format(), "day") && !t.complete
        ) || []

    return (
        <React.Fragment>
            <Title>Previous Tasks</Title>
            <Nav>
                <Link onClick={() => onViewChange("today")}>
                    {"< "} Back to today tasks
                </Link>
            </Nav>
            {prevTasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    type="prev"
                    addToToday={addToToday}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </React.Fragment>
    )
}
