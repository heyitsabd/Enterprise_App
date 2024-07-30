import React from 'react';
import Card from 'react-bootstrap/Card';
import reviewData from '../../hardData.json';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import '../../App.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function ReviewCard() {
  const cardElements = reviewData.Testimonies.map((val, key) => (
    <Card key={key} className="testimonial-card my-3">
      <Card.Img variant="top" className='profile-Image' src={val.Image} />
      <Card.Body>
        <Card.Title>{val.Name}</Card.Title>
        <Card.Text>
          {val.Response}
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <Carousel responsive={responsive} className="testimonial-carousel" infinite>
      {cardElements}
    </Carousel>
  );
}

export default ReviewCard;
