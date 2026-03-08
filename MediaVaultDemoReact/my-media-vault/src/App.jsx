import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'



import Landing from './pages/landing'
import Contributors from './pages/contributors'
// import Media from './pages/media'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
            {/* Changed mr-auto to me-auto for Bootstrap 5 */}
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/media">Media</Nav.Link>
              <Nav.Link as={Link} to="/contributors">Contributors</Nav.Link>
            </Nav>
          </Navbar>
          <Routes>
            {/* Removed 'exact' as it is default behavior */}
            <Route path="/" element={<Landing />} />
            <Route path="/media" element={<Landing />} />
            <Route path="/contributors" element={<Contributors />} />
          </Routes>
        </BrowserRouter>


      </Container>
    </>

  )
}

export default App
