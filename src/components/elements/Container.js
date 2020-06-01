import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    width: 90%;
    max-width: 540px;
    margin: 0 auto;
    margin-top: 10rem;
`

export default function Container(props) {
    return <StyledContainer {...props} />
}
