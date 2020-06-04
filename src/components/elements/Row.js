import React from "react"
import styled from "styled-components"

const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
`

export default function Row(props) {
    return <StyledRow {...props} />
}
