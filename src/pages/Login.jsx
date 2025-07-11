import {useState} from 'react';
import {Container,Form,Button,Card,Alert} from 'react-bootstrap';
const Login = () => {
  const [email,setEmail] = useState('');       
  const [password,setPassword] = useState(''); 
  const [showAlert,setShowAlert] = useState(false); 
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email&&password){
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };
  return(
    <Container className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">Login</Card.Title>
              {showAlert && (
                <Alert variant="success">
                  Login successful!
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="******"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};
export default Login;
