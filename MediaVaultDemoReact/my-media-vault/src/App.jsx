import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Switch } from 'react-router-dom'
import { Navbar, Container, Nav} from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            <Nav className = "mr-auto">
              <Nav.Link as={Link} to="/media">Media</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contributor</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" componet = {() => <h1>Home</h1>} />
            <Route path="/media" component = {() => <h1>Media</h1>} />
            <Route path="/contributor" component = {() => <h1>Contributor</h1>} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
