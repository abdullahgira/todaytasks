import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;

    button {
        letter-spacing: 2px;
    }

    button + button {
        margin-left: 8rem;
    }
`

export default function Nav(props) {
    return <StyledNav {...props} />
}
