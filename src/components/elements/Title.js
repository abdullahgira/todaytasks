import React from "react"
import styled from "styled-components"

const PageTitle = styled.h1`
    color: #c6771b;
    text-align: center;
    font-weight: 700;
    letter-spacing: -2px;
    margin-bottom: 2rem;
`

export default function Title(props) {
    return <PageTitle {...props} />
}
