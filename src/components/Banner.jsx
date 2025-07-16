import {Container,Carousel} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
const Banner = () => {
  const navigate = useNavigate();
  return (
    <Container className='mb-4' fluid>
      <Carousel>
        <Carousel.Item
          onClick={() => navigate("/products?category=electronics,backpack")}
          style={{ cursor: 'pointer' }}
        >
          <img 
            className='d-block w-100'
            src="https://www.ourcities.in/wp-content/uploads/2020/02/croma-store-1.jpg"
            alt="Electronic Deals"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Electronic Deals</h3>
            <p>Get the best deals on electronics and backpacks</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          onClick={() => navigate("/products?category=men%27s%20clothing,women%27s%20clothing")}
          style={{ cursor: 'pointer' }}
        >
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1445205170230-053b83016050"
            alt="Fashion Collection"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Fashion Collection</h3>
            <p>Discover jewelry and clothing trends</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          onClick={() => navigate("/products?category=jewelery")}
          style={{ cursor: 'pointer' }}
        >
          <img
            className="d-block w-100"
            src="https://www.dmia.net/wp-content/uploads/How-to-Start-a-Fine-Jewelry-Collection.jpg"
            alt="Jewelry Collection"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Jewelry Collection</h3>
            <p>Discover our exquisite range of jewelry for every occasion</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
export default Banner;
