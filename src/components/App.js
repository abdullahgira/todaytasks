import React from "react"
import Container from "./elements/Container"
import TaskList from "./TaskList"
import Header from "./Header"
import Title from "./elements/Title"
import { useSelector } from "react-redux"
import * as taskTypes from "../constants/task-types"

function getTitleOfCurrenctVisibleTasks(visibleTasks) {
    switch (visibleTasks) {
        case taskTypes.TODAY_TASK:
            return "Today Tasks"
        case taskTypes.OLD_COMPLETE_TASK:
            return "Complete Tasks"
        case taskTypes.OLD_INCOMPLETE_TASK:
            return "Incomplete Tasks"
        default:
            return "Today Tasks"
    }
}

function App() {
    const visibleTasks = useSelector((state) => state.visibleTasks)

    return (
        <Container>
            <Title>{getTitleOfCurrenctVisibleTasks(visibleTasks)}</Title>
            <Header />
            <TaskList />
        </Container>
    )
}

export default App
