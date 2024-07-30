import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";
import { CartContext } from "../Context/Cart";

const CardComponent = ({ pic, name, description, price }) => {
  const cart = useContext(CartContext);
  // console.log(cart);
  return (
    <Card className="custom-card">
      <Card.Img variant="top" src={pic} className="custom-card-img" />
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title>{name}</Card.Title>
          <span className="card-price">{price}</span>
        </div>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="primary"
          className="add-to-cart-button"
          onClick={() =>
            cart.setItems([...cart.items, { name: name, price: price }])
          }
        >
          {" "}
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
