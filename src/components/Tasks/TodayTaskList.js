import React from "react"
import Title from "../elements/Title"
import Link from "../elements/Link"
import Nav from "../elements/Nav"
import TodayTask from "./TodayTask"

import moment from "moment"

export default function TodayTaskList({
    tasks,
    onViewChange,
    triggerComplete,
}) {
    const todayTasks =
        tasks.filter((t) => moment(t.date).isSame(moment(), "day")) || []
    return (
        <React.Fragment>
            <Title>Today Tasks</Title>
            <Nav>
                <Link onClick={() => onViewChange("previous")}>Previous</Link>
                <Link onClick={() => onViewChange("complete")}>Complete</Link>
            </Nav>
            {todayTasks.map((task) => (
                <TodayTask
                    key={task.id}
                    task={task}
                    triggerComplete={triggerComplete}
                />
            ))}
        </React.Fragment>
    )
}
