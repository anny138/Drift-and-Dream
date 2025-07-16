import {useContext,useState} from 'react';
import {Container,Row,Col,Form,InputGroup,Button} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import {ProductContext} from '../context/ProductContext';
const Products = ()=>{
  const {products} = useContext(ProductContext);
  const [searchTerm,setSearchTerm] = useState('');
  const [selectedCategory,setSelectedCategory] = useState('all');
  const [priceRange,setPriceRange] = useState('all');
  const {search} = useLocation();
  const queryParams = new URLSearchParams(search);
  const urlCategories = queryParams.get('category')?.split(',') || [];
  const categories = ['all',...new Set(
    products.map(product=>product.category)
      .filter(category=>category&&category.trim()!== "")
  )];
  const filteredProducts = products.filter(product=>{
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    let matchesCategory = true;
    if(urlCategories.length>0){
      matchesCategory = urlCategories.includes(product.category);
    }
    else{
      matchesCategory = selectedCategory==='all' || product.category.toLowerCase()===selectedCategory.toLowerCase();
    }
    let matchesPrice = true;
    if(priceRange==='under10'){
      matchesPrice = product.price<10;
    } 
    else if(priceRange==='10to700'){
      matchesPrice = product.price>=10&&product.price<=700;
    } 
    else if(priceRange==='over700'){
      matchesPrice = product.price>700;
    }
    return matchesSearch && matchesCategory && matchesPrice;
  });
  return(
    <Container className="mt-4">
      <h2>All Products</h2>
      <Row className="mb-4">
        <Col md={4}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <Button variant="outline-secondary">
              🔍
            </Button>
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Select
            value={selectedCategory}
            onChange={(e)=>setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category=>(
              <option key={category} value={category}>
                {category === 'all'?'All Categories':category}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select 
            value={priceRange} 
            onChange={(e)=>setPriceRange(e.target.value)}
            className="price-select"
          >
            <option value="all">All Prices</option>
            <option value="under10">Under 10</option>
            <option value="10to700">10-700</option>
            <option value="over700">Over 700</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        {filteredProducts.map(product=>(
          <Col key={product.id} md={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      {filteredProducts.length === 0 && (
        <div className="text-center mt-5">
          <h4>No products found</h4>
          <p>Try adjusting your search criteria</p>
        </div>
      )}
    </Container>
  );
};
export default Products;