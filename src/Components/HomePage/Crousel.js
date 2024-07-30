import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../pics/pic1.jpg';
import pic2 from '../pics/pic2.jpg';
import pic3 from '../pics/pic3.jpg';

function Slider() {
  return (
    <Carousel wrap fade style={{opacity:'0.8'}}>
      <Carousel.Item interval={1000}>
        <img
          src={pic1}
          alt="First slide"
          style={{ width: '100%', height: '400px'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src={pic2}
          alt="Second slide"
          style={{ width: '100%', height: '400px' }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src={pic3}
          alt="Third slide"
          style={{ width: '100%', height: '400px'}}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
