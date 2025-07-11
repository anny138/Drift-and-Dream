import {useContext,useState} from 'react';
import {Card,Button,Badge } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import {formatINR} from '../utils/currency'; 
const ProductCard = ({product})=>{
  const {addToCart} = useContext(CartContext);
  const [isAdding,setIsAdding] = useState(false);
  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  return (
    <Card className="h-100 product-card">
      <Card.Img variant="top" src={product.image} alt={product.title} style={{height:'200px',objectFit:'cover'}} />
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{fontSize:'1rem'}}>
          {product.title.length>50?product.title.substring(0,50)+'...':product.title}
        </Card.Title>
        <Card.Text style={{fontSize:'0.9rem'}}>
          {(product.description && product.description.length>100)?product.description.substring(0,100) +'...' :product.description}
        </Card.Text>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="h5 text-primary">
              {formatINR(product.price)}
            </span>
            <Badge bg="warning" text="dark">
              ⭐ {product.rating?.rate ?? 'N/A'}
            </Badge>
          </div>
          <div className="d-grid gap-2">
            <Button variant="outline-primary" size="sm" as={Link} to={`/product/${product.id}`}>
              View Details
            </Button>
            <Button variant="warning" size="sm" onClick={handleAddToCart} disabled={isAdding}>
              {isAdding?'Adding...':'Add to Cart'}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
