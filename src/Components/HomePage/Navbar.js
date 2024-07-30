import React,{useContext} from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { BsCart4 } from "react-icons/bs";
import {CartContext} from '../../Context/Cart'


const NavigationBar = () => {

  const cart = useContext(CartContext)
  const cart_count =cart.items.length
  const cartCount = cart_count;

  return (
    <Navbar style={{ backgroundColor: '#179A5B' }} expand="lg">
      <Container>
        <div className='Brand_Name'>
          <Navbar.Brand as={Link} to="/" style={{ color: 'inherit' }}><b>The Jwels</b></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: '#fff' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/rings" style={{ color: '#fff' }}>Rings</Nav.Link>
            <Nav.Link as={Link} to="/necklace" style={{ color: '#fff' }}>Necklace</Nav.Link>
            <Nav.Link as={Link} to="/pendant" style={{ color: '#fff' }}>Pendant</Nav.Link>
            <Nav.Link as={Link} to="/Offers" style={{ color: '#fff' }}>Best Deals</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Cart" className="cart-link">
              <BsCart4 />
              {cartCount > 0 && (
                <Badge pill bg="danger" className="cart-badge">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
