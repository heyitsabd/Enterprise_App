import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/Cart';
import { Card, Container, Row, Col, Button, Modal } from 'react-bootstrap';
import '../App.css';

function Cart() {
  const { items, removeItem, updateItemStatus } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Function to parse price from string to number
  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/,/g, '')) || 0;
  };

  // Calculate the total price of items in the cart
  const total = items.reduce((sum, item) => sum + parsePrice(item.price), 0);

  
  const handleBuyNow = () => {
    items.forEach(item => {
      if (!item.purchased) {
        updateItemStatus(item.id, { purchased: true });
      }
    });
    setShowConfirmation(true); 
  
  };

 
  const handleCloseModal = () => setShowModal(false);


  const handleShowModal = () => setShowModal(true);

  return (
    <Container>
      <h2>Cart</h2>
      <Row>
        {items.length > 0 ? (
          items.map((item,key) => (
            <Col key={key} sm={12} md={6} lg={4}>
              <Card className={`mb-3 cart-item-card ${item.purchased ? 'purchased' : ''}`}>
               
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${item.price}
                  </Card.Text>
                  <div className="button-container">
                    {item.purchased ? (
                      <Button 
                        variant="success" 
                        className="buy-now-button"
                      >
                        Purchased
                      </Button>
                    ) : (
                      <Button 
                        variant="danger" 
                        onClick={() => removeItem(item.id)}
                        className="delete-button"
                      >
                        Delete
                      </Button>
                    )}
                    <Button 
                      variant="info"
                      className="return-policy-button"
                      onClick={handleShowModal}
                    >
                      Return Policy
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <Card className="text-center">
              <Card.Body>
                <Card.Text>No items in the cart.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
      <h3 className="total-price">Total: ${total}</h3>
      <Button 
        variant="success" 
        onClick={handleBuyNow}
        className="buy-now-button"
      >
        Buy All Now
      </Button>

      {/* Confirmation Modal */}
      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your order has been placed successfully.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Return Policy */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Return Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Our return policy allows you to return items within 30 days of purchase. Please make sure the items are in their original condition.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Cart;
