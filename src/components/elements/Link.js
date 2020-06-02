import React from "react"
import styled from "styled-components"

const StyledLink = styled.button`
    text-decoration: none;
    color: #ba9973;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    border: 0;
    background-color: inherit;

    &:hover {
        text-decoration: underline;
        color: #8a6841;
    }
`

export default function Link(props) {
    return <StyledLink {...props} />
}
