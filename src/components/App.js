import React from "react"
import Container from "./elements/Container"
import Title from "./elements/Title"
import Link from "./elements/Link"
import Nav from "./elements/Nav"
import TaskList from "./Tasks/TaskList"

function App() {
    return (
        <Container>
            <Title>Today's Tasks</Title>
            <Nav>
                <Link href="#">Previous</Link>
                <Link>Complete</Link>
            </Nav>
            <TaskList
                tasks={[{ name: "Some Task" }, { name: "Some other Task" }]}
            />
        </Container>
    )
}

export default App
