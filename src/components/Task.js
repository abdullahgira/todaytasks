import React, { useState } from "react"
import styled from "styled-components"
import Input from "./elements/Input"
import * as taskTypes from "../constants/task-types"
import * as actionTypes from "../constants/action-types"
import { useDispatch, useSelector } from "react-redux"
import { v4 } from "uuid"

const StyledTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #63492b;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    padding: 1rem 1.5rem;
    margin-bottom: 0.25rem;
    font-size: 16px;
`

const Checkbox = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 14px;
    line-height: 18px;
    height: 18px;
    width: 18px;
    clear: both;
    margin-right: 0.75rem;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    input:focus + .checkbox-custom {
        border: 2px solid black;
    }

    .checkbox-custom {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 18px;
        width: 18px;
        background-color: transparent;
        border-radius: 5px;
        transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        border: 1px solid #63492b;

        &::after {
            position: absolute;
            content: "";
            left: 8px;
            top: 8px;
            height: 0px;
            width: 0px;
            border-radius: 5px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(0deg) scale(0);
            -ms-transform: rotate(0deg) scale(0);
            transform: rotate(0deg) scale(0);
            opacity: 1;
            transition: all 0.3s ease-out;
            -webkit-transition: all 0.3s ease-out;
            -moz-transition: all 0.3s ease-out;
            -ms-transition: all 0.3s ease-out;
            -o-transition: all 0.3s ease-out;
        }

        &::before {
            position: absolute;
            content: "";
            left: 5px;
            top: 5px;
            width: 0px;
            height: 0px;
            border-radius: 5px;
            border: 2px solid #63492b;
            -webkit-transform: scale(0);
            -ms-transform: scale(0);
            transform: scale(0);
        }
    }

    input:checked ~ .checkbox-custom {
        background-color: #63492b;
        border-radius: 1px;
        -webkit-transform: rotate(0deg) scale(1);
        -ms-transform: rotate(0deg) scale(1);
        transform: rotate(0deg) scale(1);
        opacity: 1;
        border: 1px solid #63492b;
    }

    input:checked ~ .checkbox-custom {
        &::after {
            -webkit-transform: rotate(45deg) scale(1);
            -ms-transform: rotate(45deg) scale(1);
            transform: rotate(45deg) scale(1);
            opacity: 1;
            left: 4.5px;
            top: 1.5px;
            width: 6px;
            height: 10px;
            border: solid white;
            border-width: 0 1px 1px 0;
            background-color: transparent;
            border-radius: 0;
        }
        &::before {
            left: -1px;
            top: -1px;
            width: 18px;
            height: 18px;
            border-radius: 1px;
            -webkit-transform: scale(3);
            -ms-transform: scale(3);
            transform: scale(3);
            opacity: 0;
            z-index: 999;
            transition: all 0.3s ease-out;
            -webkit-transition: all 0.3s ease-out;
            -moz-transition: all 0.3s ease-out;
            -ms-transition: all 0.3s ease-out;
            -o-transition: all 0.3s ease-out;
        }
    }

    .checkbox-custom.circular {
        border-radius: 50%;

        &::after {
            border-radius: 50%;
        }

        &::before {
            border-radius: 50%;
        }
    }

    input:checked ~ .checkbox-custom.circular {
        border-radius: 50%;

        &::after {
            border-width: 0 1px 1px 0;
        }

        &::before {
            border-radius: 50%;
        }
    }
`

const TaskName = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 90%;
    ${(props) => props.checked && `font-style: italic; color: #ba9973`}
`

const TrashButton = styled.button`
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

const StyledPlusSymbol = styled.span`
    margin-right: 0.75rem;
    // margin-top: 0.5rem;
    font-weight: lighter;
    cursor: pointer;
`

export default function Task({ task, type, onDelete, onEdit, addToToday }) {
    const visibleTasks = useSelector((state) => state.visibleTasks)
    const dispatch = useDispatch()

    const [editing, setEditing] = useState(false)
    let renderedTask = null

    function handleCheckboxChange() {
        if (visibleTasks === taskTypes.OLD_COMPLETE_TASK) {
            dispatch({
                type: actionTypes.ADD_TASK,
                payload: {
                    id: v4(),
                    name: task.name,
                },
            })
            dispatch({
                type: actionTypes.DELETE_TASK,
                payload: { id: task.id },
            })
        } else if (visibleTasks === taskTypes.TODAY_TASK) {
            dispatch({
                type: actionTypes.TOGGLE_COMPLETE,
                payload: {
                    id: task.id,
                },
            })
        }
    }

    function handleSubmit(taskName) {
        dispatch({
            type: actionTypes.EDIT_TASK,
            payload: {
                id: task.id,
                name: taskName,
            },
        })
        setEditing(false)
    }

    // eslint-disable-next-line default-case
    switch (type) {
        case taskTypes.TODAY_TASK:
        case taskTypes.OLD_COMPLETE_TASK:
            renderedTask = (
                <Checkbox>
                    <input
                        type="checkbox"
                        checked={task.complete}
                        onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-custom circular"></span>
                </Checkbox>
            )
            break
        case taskTypes.OLD_INCOMPLETE_TASK:
            renderedTask = (
                <StyledPlusSymbol
                    onClick={() => {
                        dispatch({
                            type: actionTypes.ADD_TASK,
                            payload: {
                                id: v4(),
                                name: task.name,
                            },
                        })
                        dispatch({
                            type: actionTypes.DELETE_TASK,
                            payload: { id: task.id },
                        })
                    }}
                >
                    +
                </StyledPlusSymbol>
            )
            break
    }
    return (
        <StyledTask>
            <TaskName checked={task.complete}>
                {renderedTask}
                {editing ? (
                    <Input
                        initialVal={task.name}
                        handleSubmit={handleSubmit}
                        cancelEdit={() => setEditing(false)}
                    />
                ) : (
                    <span onClick={() => setEditing(true)}>{task.name}</span>
                )}
            </TaskName>
            <TrashButton
                onClick={() =>
                    dispatch({
                        type: actionTypes.DELETE_TASK,
                        payload: { id: task.id },
                    })
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="18px"
                    height="18px"
                >
                    <path d="M133.1 128l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H133.1zm61.6 265L188 160h18.5l6.9 233h-18.7zm70.3 0h-18V160h18v233zm52.3 0h-18.6l6.8-233H324l-6.7 233zM364 92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9 0-9.7 1.8-13.4 5L184 92h-36c-17.6 0-30 8.4-30 26h276c0-17.6-12.4-26-30-26z" />
                </svg>
            </TrashButton>
        </StyledTask>
    )
}
