import React, { useState } from "react"
import styled from "styled-components"

const SyteldInput = styled.input`
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    margin-top: 2rem;
    font-size: 18px;
    color: #63492b;

    color: #63492b;
    background-color: white;
    border: 0;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    ::placeholder {
        color: #ba9973;
    }

    &:focus {
        border: 0 !important;
    }
`

const ExtraInfo = styled.div`
    font-size: 14px;
    color: #ba9973;
    text-align: center;
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
`

const StyledKeyStroke = styled.span`
    background-color: #c6771b;
    color: white;
    border-radius: 3px;
    padding: 1px 3px;
    font-family: monospace;
`

const ENTER_KEY = 13
const ESC_KEY = 27

export default function AddTask(props) {
    const [taskName, setTaskName] = useState("")

    function handleKeyPress(e) {
        e.preventDefault()
        if (e.keyCode === ENTER_KEY) {
            if (taskName.trim() !== "") {
                props.addNewTask(taskName)
                setTaskName("")
            }
        } else if (e.keyCode === ESC_KEY) {
            if (taskName.trim() === "") {
                e.target.blur()
            } else {
                setTaskName("")
            }
        }
    }

    return (
        <>
            <SyteldInput
                type="text"
                placeholder="Add something todo..."
                onKeyUp={handleKeyPress}
                onChange={(e) => {
                    setTaskName(e.target.value)
                }}
                value={taskName}
            />
            <ExtraInfo>
                Press <StyledKeyStroke>ENTER</StyledKeyStroke> to add or{" "}
                <StyledKeyStroke>ESC</StyledKeyStroke> to cancel
            </ExtraInfo>
        </>
    )
}
