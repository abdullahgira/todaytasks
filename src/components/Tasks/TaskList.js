import React from "react"
import styled from "styled-components"
import Task from "./Task"

const StyledTaskList = styled.div`
    margin-top: 3rem;
`

export default function TaskList({ tasks }) {
    return (
        <StyledTaskList>
            {tasks.map((task) => (
                <Task>{task.name}</Task>
            ))}
        </StyledTaskList>
    )
}
