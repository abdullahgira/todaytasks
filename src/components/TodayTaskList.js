import React from "react"
import Title from "./elements/Title"
import Link from "./elements/Link"
import Nav from "./elements/Nav"

import moment from "moment"
import AddTask from "./AddTask"
import Task from "./Task"

export default function TodayTaskList({
    tasks,
    onViewChange,
    triggerComplete,
    onDelete,
    onEdit,
    addNewTask,
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
            <AddTask addNewTask={addNewTask} />
            {todayTasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    type="today"
                    triggerComplete={triggerComplete}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </React.Fragment>
    )
}
