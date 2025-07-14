import {useContext,useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import {Container,Row,Col,Button,Badge,Spinner,Accordion,Form } from 'react-bootstrap';
import {ProductContext} from '../context/ProductContext';
import {CartContext} from '../context/CartContext';
import {ThemeContext} from '../context/ThemeContext';
import {formatINR} from '../utils/currency';
const ProductDetail=()=>{
  const {id} = useParams();
  const navigate = useNavigate();
  const {products,loading:productsLoading} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);
  const {darkMode} = useContext(ThemeContext);
  const [product,setProduct] = useState(null);
  const [loading,setLoading] = useState(true);
  const [isAdding,setIsAdding] = useState(false);
  useEffect(()=>{
    if(!productsLoading){
      const found = products.find(p => p.id === parseInt(id));
      setProduct(found || null);
      setLoading(false);
    }
  },[id,products,productsLoading]);
  if(productsLoading || loading){
    return(
      <Container fluid className="text-center mt-5">
        <Spinner animation="border" />
        <p>Loading product...</p>
      </Container>
    );
  }
  if(!product){
    return(
      <Container fluid className="text-center mt-5">
        <h2>Product not found</h2>
      </Container>
    );
  }
  const discount = product.buy_box_price<product.price;
  const handleAdd=()=>{
    setIsAdding(true);
    addToCart(product);
    setTimeout(()=>setIsAdding(false),1000);
  };
  const handleBuyNow=()=>{
    addToCart(product);
    navigate('/checkout');
  };
  const themeClass = darkMode ? 'bg-dark text-light' : '';
  return(
    <Container fluid className="mt-4 px-5">
      <Row className="gx-5 align-items-center">
        <Col md={6} className="text-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{maxHeight:'500px',objectFit:'contain'}}
          />
        </Col>
        <Col md={6}>
          <h1 className="mb-3">{product.title}</h1>
          <div className="mb-3">
            {discount && (
              <span className="me-2 text-muted">
                <del className={darkMode?'text-secondary':''}>{formatINR(product.price)}</del>
              </span>
            )}
            <span className="h4 text-danger">{formatINR(product.buy_box_price)}</span>
          </div>
          <div className="mb-2">
            <Badge bg="warning" text="dark" className="me-2">
              ⭐ {product.rating.rate}
            </Badge>
            <small className="text-muted">({product.rating.count} reviews)</small>
          </div>
          <p className="mt-3">{product.description}</p>
          <div className="mb-4">
            <h5>Seller</h5>
            <p>
              {product.seller} <small className="text-muted">(Official Store)</small>
            </p>
          </div>
          <div className="mb-4">
            <h5>Availability</h5>
            <p>
              {product.availability}{' '}
              <small className="text-muted">
                (Usually dispatched within 1-2 business days)
              </small>
            </p>
          </div>
          <div className="mb-4">
            <h5>Delivery</h5>
            <p>
              {product.delivery_time}{' '}
              <small className="text-muted">
                (Fastest delivery options available at checkout)
              </small>
            </p>
          </div>
          <Button variant="warning" size="lg" className="w-100 mb-3" onClick={handleAdd} disabled={isAdding}>
            {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
          </Button>
          <Button variant="success" size="lg" className="w-100 mb-4" onClick={handleBuyNow}>
            Buy Now
          </Button>
          <Accordion defaultActiveKey="0" className={themeClass}>
            <Accordion.Item eventKey="0" className={themeClass}>
              <Accordion.Header>Payment Options</Accordion.Header>
              <Accordion.Body className={themeClass}>
                <ul className="mb-0">
                  {product.payment_options.map((opt,i)=>(
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={themeClass}>
              <Accordion.Header>Customer Reviews</Accordion.Header>
              <Accordion.Body className={themeClass}>
                {product.reviews.map((rev,i)=>(
                  <div key={i} className="mb-3">
                    <strong>{rev.user}</strong> <Badge bg="info">{rev.rating}⭐</Badge>
                    <div>
                      <em>{rev.title}</em> - <small className="text-muted">{rev.date}</small>
                    </div>
                    <p>{rev.comment}</p>
                    <hr />
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductDetail;
