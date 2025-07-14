import {Container,Row,Col,Nav,Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Footer=()=>{
  return(
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-warning">Drift & Dream</h5>
            <p>
              Your one-stop shop for fashion, electronics, and daily needs.
              Enjoy a smooth shopping experience with fast delivery and secure payments.
            </p>
          </Col>
          <Col md={2} className="mb-4">
            <h6 className="text-uppercase">Quick Links</h6>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
              <Nav.Link as={Link} to="/products" className="text-light">Products</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light">About</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="text-light">Cart</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase">Customer Service</h6>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Returns</li>
              <li>Shipping Info</li>
              <li>Terms & Conditions</li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase">Stay Updated</h6>
            <Form>
              <Form.Group controlId="formNewsletter">
                <Form.Control type="email" placeholder="Enter your email" className="mb-2" />
                <Button variant="warning" type="submit" className="w-100">Subscribe</Button>
              </Form.Group>
            </Form>
            <div className="mt-3">
              <span className="me-3">📧 support@driftdream.com</span><br />
              <span>📞 +91 88899 00867</span>
            </div>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center small">&copy;{new Date().getFullYear()} Drift & Dream. All rights reserved.</p>
      </Container>
    </footer>
  );
};
export default Footer;