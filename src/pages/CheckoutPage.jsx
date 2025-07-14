import {useContext,useState} from 'react';
import {Container,Row,Col,Card,Form,Button,Alert} from 'react-bootstrap';
import {CartContext} from '../context/CartContext';
import {formatINR} from '../utils/currency';
const CheckoutPage = () => {
  const {cartItems,getCartTotal,clearCart} = useContext(CartContext);
  const [formData,setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: '',
    upiId: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amazonPayId: ''
  });
  const [errors,setErrors] = useState({});
  const [orderPlaced,setOrderPlaced] = useState(false);
  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setFormData((prev) => ({...prev,[name]:value}));
  };
  const validateForm=()=>{
    const newErrors = {};
    ['firstName','lastName','email','address','city','zipCode','paymentMethod'].forEach((field)=>{
      if (!formData[field]) newErrors[field] = 'This field is required';
    });
    if(formData.paymentMethod === 'Card') {
      if(!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if(!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if(!formData.cvv) newErrors.cvv = 'CVV is required';
    } 
    else if(formData.paymentMethod === 'UPI') {
      if(!formData.upiId) newErrors.upiId = 'UPI ID is required';
    } 
    else if(formData.paymentMethod === 'Amazon Pay' || formData.paymentMethod === 'Amazon Pay Later') {
      if(!formData.amazonPayId) newErrors.amazonPayId = 'Amazon ID or phone is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (validateForm()) {
      setOrderPlaced(true);
      clearCart();
    }
  };
  if (orderPlaced){
    return(
      <Container className="mt-5 text-center">
        <Alert variant="success">
          <h3>Order Placed Successfully!</h3>
          <p>Thank you for your purchase. Your order will be delivered soon.</p>
        </Alert>
      </Container>
    );
  }
  return(
    <Container className="mt-4">
      <h2>Checkout</h2>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Shipping & Payment Details</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control name="firstName" value={formData.firstName} onChange={handleInputChange} isInvalid={!!errors.firstName} />
                      <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control name="lastName" value={formData.lastName} onChange={handleInputChange} isInvalid={!!errors.lastName} />
                      <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" value={formData.email} onChange={handleInputChange} isInvalid={!!errors.email} />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control name="address" value={formData.address} onChange={handleInputChange} isInvalid={!!errors.address} />
                  <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                </Form.Group>
                <Row>
                  <Col md={8}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control name="city" value={formData.city} onChange={handleInputChange} isInvalid={!!errors.city} />
                      <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP Code</Form.Label>
                      <Form.Control name="zipCode" value={formData.zipCode} onChange={handleInputChange} isInvalid={!!errors.zipCode} />
                      <Form.Control.Feedback type="invalid">{errors.zipCode}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Select Payment Method</Form.Label>
                  <Form.Select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange} isInvalid={!!errors.paymentMethod}>
                    <option value="">Choose...</option>
                    <option>Card</option>
                    <option>UPI</option>
                    <option>Cash on Delivery</option>
                    <option>Amazon Pay</option>
                    <option>Amazon Pay Later</option>
                    <option>Wallet</option>
                    <option>EMI</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.paymentMethod}</Form.Control.Feedback>
                </Form.Group>
                {formData.paymentMethod === 'Card' && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} isInvalid={!!errors.cardNumber} />
                      <Form.Control.Feedback type="invalid">{errors.cardNumber}</Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Expiry Date</Form.Label>
                          <Form.Control name="expiryDate" placeholder="MM/YY" value={formData.expiryDate} onChange={handleInputChange} isInvalid={!!errors.expiryDate} />
                          <Form.Control.Feedback type="invalid">{errors.expiryDate}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control name="cvv" value={formData.cvv} onChange={handleInputChange} isInvalid={!!errors.cvv} />
                          <Form.Control.Feedback type="invalid">{errors.cvv}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                  </>
                )}
                {formData.paymentMethod === 'UPI' && (
                  <Form.Group className="mb-3">
                    <Form.Label>UPI ID</Form.Label>
                    <Form.Control name="upiId" placeholder="example@bank" value={formData.upiId} onChange={handleInputChange} isInvalid={!!errors.upiId} />
                    <Form.Control.Feedback type="invalid">{errors.upiId}</Form.Control.Feedback>
                  </Form.Group>
                )}
                {(formData.paymentMethod === 'Amazon Pay' || formData.paymentMethod === 'Amazon Pay Later') && (
                  <Form.Group className="mb-3">
                    <Form.Label>Amazon ID</Form.Label>
                    <Form.Control name="amazonPayId" placeholder="Email or Phone" value={formData.amazonPayId} onChange={handleInputChange} isInvalid={!!errors.amazonPayId} />
                    <Form.Control.Feedback type="invalid">{errors.amazonPayId}</Form.Control.Feedback>
                  </Form.Group>
                )}
                {(formData.paymentMethod === 'Wallet' || formData.paymentMethod === 'EMI') && (
                  <Form.Text className="mb-3 d-block">
                    You will be redirected to complete your {formData.paymentMethod} option during final checkout.
                  </Form.Text>
                )}
                {formData.paymentMethod === 'Cash on Delivery' && (
                  <Form.Text className="mb-3 d-block">Pay in cash upon delivery.</Form.Text>
                )}
                <Button variant="warning" type="submit" size="lg" className="w-100">
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>{item.title.substring(0,20)}... x{item.quantity}</span>
                  <span>{formatINR(item.price*item.quantity)}</span>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total: {formatINR(getCartTotal()*1.08)}</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default CheckoutPage;