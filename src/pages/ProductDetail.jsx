import {useContext,useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Container,Row,Col,Button,Card,Badge,Spinner} from 'react-bootstrap';
import {ProductContext} from '../context/ProductContext';
import {CartContext} from '../context/CartContext';
import {formatINR} from '../utils/currency';
const ProductDetail=()=>{
  const {id}=useParams();
  const {products,loading:productsLoading} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);
  const [product,setProduct] = useState(null);
  const [lookupLoading,setLookupLoading] = useState(true);
  const [isAdding,setIsAdding] = useState(false);
  useEffect(()=>{
    if(!productsLoading){
      const foundProduct = products.find(p=>p.id===parseInt(id));
      setProduct(foundProduct);
      setLookupLoading(false);
    }
  },[id,products,productsLoading]);
  const handleAddToCart=()=>{
    addToCart(product);
    setIsAdding(true);
    setTimeout(()=>{
      setIsAdding(false);
    },1000);
  };
  if(productsLoading||lookupLoading){
    return(
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Loading product...</p>
      </Container>
    );
  }
  if(!product){
    return(
      <Container className="text-center mt-5">
        <h2>Product not found</h2>
      </Container>
    );
  }
  return(
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={product.image}
              style={{height:'400px',objectFit:'contain',padding:'20px' }}
            />
          </Card>
        </Col>
        <Col md={6}>
          <h1>{product.title}</h1>
          <h3 className="text-primary">{formatINR(product.price)}</h3>
          <div className="d-flex align-items-center mb-3">
            <Badge bg="warning" text="dark" className="me-2">
              ⭐{product.rating?.rate}
            </Badge>
            <span className="text-muted">
              ({product.rating?.count??0}reviews)
            </span>
          </div>
          <p className="mt-3">{product.description}</p>
          <div className="mt-4">
            <Badge bg="secondary" className="me-2">
              Category:{product.category}
            </Badge>
          </div>
          <div className="mt-4">
            <Button
              variant="warning"
              size="lg"
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-100"
            >
              {isAdding ?'Adding to Cart...':'Add to Cart'}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductDetail;
