import {useContext} from 'react';
import {Navbar,Nav,Container,Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import {ThemeContext} from '../context/ThemeContext';
const NavigationBar = () => {
  const {cartItems} = useContext(CartContext);
  const {darkMode,toggleDarkMode} = useContext(ThemeContext);
  const getCartCount = () => {
    let count = 0;
    for (let i=0;i<cartItems.length;i++) {
      count+=cartItems[i].quantity;
    }
    return count;
  };
  const navTheme=darkMode?'dark':'light';
  return (
    <Navbar bg={navTheme} variant={navTheme} expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span style={{color:'#ff9900'}}>Drift &</span> Dream
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link> 
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              Cart{' '}
              <Badge bg="danger" pill>
                {getCartCount()}
              </Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link onClick={toggleDarkMode}>
              {darkMode?'☀️':'🌙'}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
