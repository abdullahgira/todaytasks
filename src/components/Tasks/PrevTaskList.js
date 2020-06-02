import React from "react"
import Title from "../elements/Title"
import Link from "../elements/Link"
import Nav from "../elements/Nav"
import PrevTask from "./PrevTask"

import moment from "moment"

export default function PrevTaskList({
    tasks,
    onViewChange,
    addToTodayTasks,
    onDelete,
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
                <PrevTask
                    key={task.id}
                    task={task}
                    addToTodayTasks={addToTodayTasks}
                    onDelete={onDelete}
                />
            ))}
        </React.Fragment>
    )
}
