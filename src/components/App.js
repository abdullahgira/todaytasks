import React, { useState, useEffect } from "react"
import Container from "./elements/Container"
import TodayTaskList from "./Tasks/TodayTaskList"
import PreviousTaskList from "./Tasks/PrevTaskList"
import CompleteTaskList from "./Tasks/CompleteTaskList"
import { v4 as uuidv4 } from "uuid"

import moment from "moment"
import AddTask from "./AddTask"

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

    function addToTodayTasks(prevTask) {
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

    function AddNewTask(taskName) {
        let newTask = {
            id: uuidv4(),
            name: taskName,
            complete: false,
            date: moment(),
        }

        setTasks([...tasks, newTask])
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
                    />
                    <AddTask AddNewTask={AddNewTask} />
                </>
            )}
            {view === "previous" && (
                <PreviousTaskList
                    onViewChange={setView}
                    tasks={tasks}
                    addToTodayTasks={addToTodayTasks}
                />
            )}
            {view === "complete" && (
                <CompleteTaskList
                    onViewChange={setView}
                    tasks={tasks}
                    addToTodayTasks={addToTodayTasks}
                />
            )}
        </Container>
    )
}

export default App
