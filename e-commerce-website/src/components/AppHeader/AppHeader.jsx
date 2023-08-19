import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./AppHeader.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function AppHeader() {
  const { isLoggedIn,logoutHandler } = useContext(AuthContext);
  const navigate=useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{ color: "#1c4670",cursor:'pointer' }} onClick={()=>navigate('/')}>
          Online Shoppe App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLinkStyle : styles.linkStyle
              }
              to="/"
            >
              Home
            </NavLink>

            {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav style={{ marginRight: "15px" }}>
            {isLoggedIn && (
              <NavLink  to='/'>
                <Button onClick={()=>logoutHandler()} variant="secondary">Logout</Button>
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLinkStyle : styles.linkStyle
                }
                to="/login"
              >
                Login
              </NavLink>
            )}
          </Nav>
          <Nav>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLinkStyle : styles.linkStyle
              }
            to={isLoggedIn ? '/cart/id':'/redirect'}
            >
              Cart
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
