import {useContext} from 'react';
import {Card,Button,Badge} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {formatINR} from '../utils/currency';
import {ThemeContext} from '../context/ThemeContext';
const ProductCard = ({product}) => {
  const {darkMode} = useContext(ThemeContext);
  const actualPrice = product.buy_box_price ?? product.price;
  const discount = product.buy_box_price && product.buy_box_price < product.price;
  return (
    <Card className="h-100 shadow-sm product-card position-relative">
      <Link to={`/product/${product.id}`} className="stretched-link" />
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-2" style={{ fontSize: '1rem' }}>
          {product.title.length > 50 ? product.title.substring(0, 50) + '...' : product.title}
        </Card.Title>
        <Badge bg="info" className="mb-2 align-self-start">
          {product.category}
        </Badge>
        <div className="mb-2">
          {discount && (
            <small style={{ color: darkMode ? '#bbb' : '#6c757d' }}>
              <del>{formatINR(product.price)}</del>
            </small>
          )}
          <span className="h6 text-danger ms-2">{formatINR(actualPrice)}</span>
        </div>
        {product.rating && (
          <div className="mb-3">
            <Badge bg="warning" text="dark">
              ⭐ {product.rating.rate} ({product.rating.count})
            </Badge>
          </div>
        )}
        <div className="mt-auto d-grid gap-2">
          <Button variant="primary" size="sm" as={Link} to={`/product/${product.id}`}>
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
