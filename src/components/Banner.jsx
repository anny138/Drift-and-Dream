import {Container,Carousel} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
const Banner=()=>{
  const navigate = useNavigate();
  return(
    <Container className='mb-4' fluid>
      <Carousel>
        <Carousel.Item 
          onClick={()=>navigate("/products?category=Electronics,Backpack")}
          style={{cursor:'pointer'}}
        >
          <img 
            className='d-block w-100'  
            src="https://www.ourcities.in/wp-content/uploads/2020/02/croma-store-1.jpg" 
            alt="Electronic Deals" 
            style={{height:'400px',objectFit:'cover'}}
          />
          <Carousel.Caption>
            <h3>Electronic Deals</h3>
            <p>Get the best deals on electronics and backpacks</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item 
          onClick={()=>navigate("/products?category=Jewelery,Men's clothing,Women's Clothing")}
          style={{cursor:'pointer'}}
        >
          <img 
            className="d-block w-100" 
            src="https://images.unsplash.com/photo-1445205170230-053b83016050" 
            alt="Fashion Collection" 
            style={{height:'400px',objectFit:'cover'}} 
          />
          <Carousel.Caption>
            <h3>Fashion Collection</h3>
            <p>Discover jewelry and clothing trends</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item 
          onClick={()=>navigate("/products?category=Groceries,Kitchen appliances")}
          style={{cursor:'pointer' }}
        >
          <img 
            className="d-block w-100" 
            src="http://proudtobuild.fultonhomes.com/wp-content/uploads/2014/04/Kitchen20and20Nook20DSC_0244.jpg" 
            alt="Home & Kitchen" 
            style={{height:'400px',objectFit:'cover'}}
          />
          <Carousel.Caption>
            <h3>Home & Kitchen</h3>
            <p>Everything for your home and kitchen needs</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
export default Banner;