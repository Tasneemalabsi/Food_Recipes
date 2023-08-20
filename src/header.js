import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from './Login';
import LogoutButton from './Logout';
import { useAuth0, withAuth0 } from '@auth0/auth0-react';

function Header() {
  const {isAuthenticated, user } = useAuth0();
  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    console.log(user)
  }, [isAuthenticated]);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isAuthenticated?<Nav.Link href="/profile">Profile</Nav.Link>:<></>}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown"s>
              <NavDropdown.Item href="/allmeals">All Meals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/signup">sign up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
        {isAuthenticated?<><h5>{user.nickname}</h5><img src={user.picture} alt={user.name} width={30} height={30} style={{marginRight:"10px", marginLeft:"10px"}}/><LogoutButton /></>:<LoginButton/>}
      </Container>
    </Navbar>
  );
}

export default withAuth0(Header);