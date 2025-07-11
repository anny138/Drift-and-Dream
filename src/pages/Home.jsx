import {useContext} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import {ProductContext} from '../context/ProductContext';
import Spinner from 'react-bootstrap/Spinner';
const Home=()=>{
  const {products,loading} = useContext(ProductContext);
  const featuredProducts = products.slice(0,8);
  if(loading){
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" variant="primary" role="status" />
        <div>Loading products...</div>
      </Container>
    );
  }
  return (
    <div>
      <Banner />
      <Container>
        <h2 className="mb-4">Featured Products</h2>
        <Row>
          {featuredProducts.map(product=>(
            <Col key={product.id} md={3} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Home;
