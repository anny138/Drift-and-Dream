import {useContext} from 'react';
import {Container,Row,Col,Card,Button,ListGroup,Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import {formatINR} from '../utils/currency';
const CartPage=()=>{
  const {cartItems,removeFromCart,updateQuantity,getCartTotal} = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum,item)=>{
    return sum+item.quantity;
  },0);
  if(cartItems.length===0){
    return(
      <Container className="text-center mt-5">
        <h2>Your Cart is Empty</h2>
        <p>Nothing here yet. Add some stuff and come back!</p>
        <Button as={Link} to="/" variant="primary">
          Continue Shopping
        </Button>
      </Container>
    );
  }
  const subtotal=getCartTotal();
  const taxAmount=subtotal*0.08; 
  const total=subtotal+taxAmount;
  return(
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <h2>Shopping Cart</h2>
          <ListGroup>
            {cartItems.map((item) =>(
              <ListGroup.Item key={item.id} className="mb-3">
                <Row className="align-items-center">
                  <Col md={2}>
                    <img src={item.image} alt={item.title} style={{width:80,height:80,objectFit:'cover'}}
                    />
                  </Col>
                  <Col md={4}>
                    <h6>
                      {item.title}{' '}
                      <Badge bg="secondary" pill>
                        x{item.quantity}
                      </Badge>
                    </h6>
                    <p className="text-muted">{formatINR(item.price)}</p>
                  </Col>
                  <Col md={3}>
                    <div className="d-flex align-items-center">
                      <Button variant="outline-secondary" size="sm" onClick={()=>updateQuantity(item.id,item.quantity-1)}>
                        -
                      </Button>
                      <span className="mx-3">{item.quantity}</span>
                      <Button variant="outline-secondary" size="sm" onClick={()=>updateQuantity(item.id,item.quantity+1)}>
                        +
                      </Button>
                    </div>
                  </Col>
                  <Col md={2}>
                    <strong>{formatINR(item.price * item.quantity)}</strong>
                  </Col>
                  <Col md={1}>
                    <Button variant="danger" size="sm" onClick={()=>removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                Order Summary{' '}
                <Badge bg="info">{totalQuantity} items</Badge>
              </Card.Title>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax:</span>
                <span>{formatINR(taxAmount)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>{formatINR(total)}</strong>
              </div>
              <Button variant="warning" size="lg" className="w-100" as={Link} to="/checkout">
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default CartPage;
