import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    a {
        letter-spacing: 2px;
    }

    a + a {
        margin-left: 8rem;
    }
`

export default function Nav(props) {
    return <StyledNav {...props} />
}
