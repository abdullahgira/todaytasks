import React from "react"
import Nav from "./elements/Nav"
import Link from "./elements/Link"
import { useSelector, useDispatch } from "react-redux"
import { changeVisibleTasks } from "../actions"
import * as taskTypes from "../constants/task-types"

export default function Header() {
    const visibleTasks = useSelector((state) => state.visibleTasks)
    const dispatch = useDispatch()
    switch (visibleTasks) {
        case taskTypes.OLD_COMPLETE_TASK:
        case taskTypes.OLD_INCOMPLETE_TASK:
            return (
                <Nav>
                    <Link
                        onClick={() =>
                            dispatch(changeVisibleTasks(taskTypes.TODAY_TASK))
                        }
                    >
                        {"< "} Back to today tasks
                    </Link>
                </Nav>
            )
        case taskTypes.TODAY_TASK:
            return (
                <Nav>
                    <Link
                        onClick={() =>
                            dispatch(
                                changeVisibleTasks(
                                    taskTypes.OLD_INCOMPLETE_TASK
                                )
                            )
                        }
                    >
                        Incomplete
                    </Link>
                    <Link
                        onClick={() =>
                            dispatch(
                                changeVisibleTasks(taskTypes.OLD_COMPLETE_TASK)
                            )
                        }
                    >
                        Complete
                    </Link>
                </Nav>
            )
        default:
            return null
    }
}
