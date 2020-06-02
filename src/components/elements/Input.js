import React, { useState } from "react"
import styled from "styled-components"

const StyledInput = styled.input`
    border: 0;
    border-bottom: 1px solid #ba9973;
    color: #63492b;
    font-size: 16px;
    width: 100%;
`

const ENTER_KEY = 13
const ESC_KEY = 27

export default function Input(props) {
    const [inputVal, setInputVal] = useState(props.initialVal)

    function handleKeyPress(e) {
        e.preventDefault()
        if (e.keyCode === ENTER_KEY) {
            if (inputVal.trim() !== "") {
                props.handleSubmit(inputVal)
                setInputVal(props.initialVal || "")
            }
        } else if (e.keyCode === ESC_KEY) {
            if (inputVal.trim() === "") {
                e.target.blur()
            } else {
                setInputVal(props.initialVal || "")
            }
        }
    }

    return (
        <StyledInput
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyUp={handleKeyPress}
            autoFocus={true}
        />
    )
}
