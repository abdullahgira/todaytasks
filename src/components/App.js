import React, { useState, useEffect } from "react"
import Container from "./elements/Container"
import TodayTaskList from "./TodayTaskList"
import PreviousTaskList from "./PrevTaskList"
import CompleteTaskList from "./CompleteTaskList"
import { v4 as uuidv4 } from "uuid"

import moment from "moment"

function App() {
    const [tasks, setTasks] = useState(
        () => JSON.parse(window.localStorage.getItem("tasks")) || []
    )
    const [view, setView] = useState(() => "today")

    function triggerComplete(taskId) {
        let taskIdx = tasks.findIndex((t) => t.id === taskId)
        let task = tasks[taskIdx]
        task.complete = !task.complete
        setTasks([
            ...tasks.slice(0, taskIdx),
            task,
            ...tasks.slice(taskIdx + 1),
        ])
    }

    function addToToday(prevTask) {
        let taskIdx = tasks.findIndex((t) => t.id === prevTask.id)
        let newTask = {
            ...tasks[taskIdx],
            complete: false,
            date: moment(),
        }
        setTasks([
            ...tasks.slice(0, taskIdx),
            newTask,
            ...tasks.slice(taskIdx + 1),
        ])
    }

    function addNewTask(taskName) {
        let newTask = {
            id: uuidv4(),
            name: taskName,
            complete: false,
            date: moment(),
        }

        setTasks([...tasks, newTask])
    }

    function deleteTask(taskId) {
        let taskIdx = tasks.findIndex((t) => t.id === taskId)
        setTasks([...tasks.slice(0, taskIdx), ...tasks.slice(taskIdx + 1)])
    }

    function editTask(task) {
        let taskIdx = tasks.findIndex((t) => t.id === task.id)
        let oldTask = tasks[taskIdx]
        let newTask = {
            ...oldTask,
            name: task.name,
        }
        setTasks([
            ...tasks.slice(0, taskIdx),
            newTask,
            ...tasks.slice(taskIdx + 1),
        ])
    }

    useEffect(() => {
        window.localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    return (
        <Container>
            {view === "today" && (
                <>
                    <TodayTaskList
                        tasks={tasks}
                        onViewChange={setView}
                        triggerComplete={triggerComplete}
                        onDelete={deleteTask}
                        onEdit={editTask}
                        addNewTask={addNewTask}
                    />
                    {/* <AddTask addNewTask={addNewTask} /> */}
                </>
            )}
            {view === "previous" && (
                <PreviousTaskList
                    onViewChange={setView}
                    tasks={tasks}
                    addToToday={addToToday}
                    onDelete={deleteTask}
                    onEdit={editTask}
                />
            )}
            {view === "complete" && (
                <CompleteTaskList
                    onViewChange={setView}
                    tasks={tasks}
                    addToToday={addToToday}
                    onDelete={deleteTask}
                    onEdit={editTask}
                />
            )}
        </Container>
    )
}

export default App
