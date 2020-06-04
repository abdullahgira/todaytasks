import React, { useState } from "react"
import styled from "styled-components"

const StyledInput = styled.input`
    border: 0;
    border-bottom: 1px solid #ba9973;
    color: #63492b;
    font-size: 16px;
    width: 100%;
    padding-top: 3px;
    padding-right: 6px;
`

const CancellButton = styled.button`
    border: 0;
    background-color: inherit;
    box-shadow: none;
    cursor: pointer;

    &:hover {
        svg {
            fill: #63492b;
        }
    }

    svg {
        fill: #ba9973;
    }
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
            setInputVal(props.initialVal || "")
            e.target.blur()
            handleCancelEdit()
        }
    }

    function handleCancelEdit() {
        props.cancelEdit && props.cancelEdit()
    }

    return (
        <React.Fragment>
            <StyledInput
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyUp={handleKeyPress}
                autoFocus={true}
                onBlur={() => handleCancelEdit()}
            />
            <CancellButton>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="18px"
                    height="18px"
                    onClick={() => handleCancelEdit()}
                >
                    <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
                </svg>
            </CancellButton>
        </React.Fragment>
    )
}
