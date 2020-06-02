import React, { useState } from "react"
import Task from "./Task"
import styled from "styled-components"
import Input from "../elements/Input"

const StyledInput = styled.input`
    border: 0;
    border-bottom: 1px solid #ba9973;
    color: #63492b;
    font-size: 16px;
    width: 100%;
`

export default function TodayTask({ task, triggerComplete, ...props }) {
    const [editing, setEditing] = useState(false)

    function handleSubmit(taskName) {
        props.onEdit({ ...task, name: taskName })
        setEditing(false)
    }
    return (
        <Task task={task} {...props}>
            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={task.complete}
                    onChange={() => triggerComplete(task.id)}
                />
                <span className="checkbox-custom circular"></span>
            </label>
            {editing ? (
                <Input initialVal={task.name} handleSubmit={handleSubmit} />
            ) : (
                <span onClick={() => setEditing(true)}>{task.name}</span>
            )}
        </Task>
    )
}
