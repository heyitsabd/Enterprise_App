import React, { useState } from 'react';
import SearchBar from '../Searchbar'

import { Button, Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import CardComponent from '../cardComponent';
import OffersData from '../../hardData.json'





function Offer() {
  
  const { NecklaceData, RingData, PendantData} = OffersData;

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/,/g, '')) || 0;
  };

  const combinedData = [...NecklaceData,...RingData,...PendantData];

  const initialData = combinedData.filter(item => parsePrice(item.price) <= 1000);

  const [data, setData] = useState(initialData);
  const [visible, setVisible] = useState(6);
  const [searchQuery,setSearchQuert] = useState('')

  const handleSearch=(props)=>{
    setSearchQuert(props)
  }

  const filteredData = data.filter(item=>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  console.log(filteredData)

  const showMore = () => {
    setVisible(visible+6);
  }

  const showLess =()=>{
    setVisible(visible-6)
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch}/>
      <Container>
      <Row>
        {filteredData.slice(0, visible).map((item, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <CardComponent
            pic={item.pic}
            name={item.name}
            description={item.description}
            price={item.price}
            />
          </Col>
        ))}
      </Row>
      {visible < data.length ? (
        <Button onClick={showMore} className="show-more-button">
          Show More
        </Button>
      ):(
        <Button onClick={showLess} className="show-more-button">
          Show Less
        </Button>
      )}
    </Container>
    </div>
  )
}

export default Offer
