import {useContext} from 'react';
import {Navbar,Nav,Container,Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import {ThemeContext} from '../context/ThemeContext';
import {useUser} from '../context/UserContext';
const NavigationBar =()=>{
  const {cartItems} = useContext(CartContext);
  const {darkMode,toggleDarkMode} = useContext(ThemeContext);
  const {userName,logout} = useUser();
  const getCartCount =()=>{
    return cartItems.reduce((acc,item)=>acc+item.quantity,0);
  };
  const navTheme = darkMode ? 'dark' : 'light';
  return (
    <Navbar bg={navTheme} variant={navTheme} expand="lg" className="mb-4 shadow-sm px-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span style={{ color:'#ff9900' }}>Drift &</span> Dream
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            {userName && (
              <Navbar.Text className="me-3">Welcome, {userName}</Navbar.Text>
            )}
            <Nav.Link as={Link} to="/cart">
              Cart <Badge bg="danger" pill>{getCartCount()}</Badge>
            </Nav.Link>
            {userName ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
            <Nav.Link
              onClick={toggleDarkMode}
              className="d-flex align-items-center"
              style={{fontSize:'1.2rem'}}
              title="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;