import {useContext} from 'react';
import {Container,Spinner} from 'react-bootstrap';
import {UserContext} from '../context/UserContext';
import {ProductContext} from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
const Home=()=>{
  const {userName} = useContext(UserContext);
  const {products,loading } = useContext(ProductContext);
  const featured = products.slice(0,8);
  if(loading) return(
    <Container className="text-center my-5">
      <Spinner animation="border" />
      <div>Loading products...</div>
    </Container>
  );
  return(
    <div>
      <Banner />
      <Container>
        <h2 className="mb-4">
          {userName ? `Welcome back,${userName}!`:'Featured Products'}
        </h2>
        <div className="row">
          {featured.map((p)=>(
            <div key={p.id} className="col-md-3 mb-4">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default Home;
