import React from "react"
import styled from "styled-components"
import Task from "./Task"
import add from "../../icons/ios-add.svg"
const StyledPlusSymbol = styled.span`
    margin-right: 0.75rem;
    // margin-top: 0.5rem;
    font-weight: lighter;
    cursor: pointer;
`

export default function PrevTask({ task, addToTodayTasks }) {
    return (
        <Task>
            <StyledPlusSymbol onClick={() => addToTodayTasks(task)}>
                +
            </StyledPlusSymbol>
            {/* <StyledPlusSymbol>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="18"
                    height="18"
                >
                    <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
                </svg>
            </StyledPlusSymbol> */}
            {task.name}
        </Task>
    )
}
