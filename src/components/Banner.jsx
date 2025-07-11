import {Container,Carousel} from 'react-bootstrap';
const Banner=()=>{
    return(
        <Container className='mb-4'>
            <Carousel>
                <Carousel.Item>
                    <img className='d-block w-100'  src="https://www.ourcities.in/wp-content/uploads/2020/02/croma-store-1.jpg" alt="Electronic Deals" style={{height:'400px',objectFit:'cover'}}/>
                    <Carousel.Caption>
                        <h3>Electronic Deals</h3>
                        <p>Get the best deals on electronic items </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Fashion Collection" style={{height:'400px',objectFit:'cover'}} />
                    <Carousel.Caption>
                        <h3>Fashion Collection</h3>
                        <p>Discover the latest fashion trends</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="http://proudtobuild.fultonhomes.com/wp-content/uploads/2014/04/Kitchen20and20Nook20DSC_0244.jpg" alt="Home & Kitchen" style={{height:'400px',objectFit:'cover'}}/>
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