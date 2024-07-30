import React, { useState } from 'react';
import SearchBar from '../Searchbar'

import { Button, Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import CardComponent from '../cardComponent';
import PendantData from '../../hardData.json'

// const data = [
//   {
//     pic: 'https://via.placeholder.com/150/0000FF/808080?text=Pendant1',
//     name: 'Elegant Diamond Pendant',
//     description: 'A beautiful diamond pendant with an elegant design, perfect for special occasions.',
//     price: '2,500'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Pendant2',
//     name: 'Classic Gold Pendant',
//     description: 'A timeless gold pendant that symbolizes eternal love and commitment.',
//     price: '800'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/00FF00/000000?text=Pendant3',
//     name: 'Platinum Pendant',
//     description: 'A stunning platinum pendant designed to celebrate your special moments.',
//     price: '3,000'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFFF00/000000?text=Pendant4',
//     name: 'Sapphire Gemstone Pendant',
//     description: 'An exquisite pendant featuring a deep blue sapphire gemstone.',
//     price: '1,500'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/000000/FFFFFF?text=Pendant5',
//     name: 'Rose Gold Pendant',
//     description: 'A modern pendant crafted from rose gold, offering a unique and stylish look.',
//     price: '1,200'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFFFFF/000000?text=Pendant6',
//     name: 'Vintage Silver Pendant',
//     description: 'A vintage-inspired silver pendant with intricate detailing.',
//     price: '600'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Pendant7',
//     name: 'Emerald Cut Pendant',
//     description: 'A sophisticated pendant with an emerald cut stone, perfect for making a statement.',
//     price: '4,000'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/00FFFF/000000?text=Pendant8',
//     name: 'Pearl Pendant',
//     description: 'A delicate pendant featuring a lustrous pearl at its center.',
//     price: '900'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Pendant9',
//     name: 'Ruby Pendant',
//     description: 'A pendant adorned with a vibrant ruby gemstone, symbolizing passion and love.',
//     price: '1,800'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/800080/FFFFFF?text=Pendant10',
//     name: 'Halo Diamond Pendant',
//     description: 'A dazzling halo pendant with a center diamond surrounded by smaller diamonds.',
//     price: '3,500'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/008080/FFFFFF?text=Pendant11',
//     name: 'Twisted Band Pendant',
//     description: 'A unique pendant with a twisted band design, adding a modern touch.',
//     price: '1,100'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Pendant12',
//     name: 'Cushion Cut Pendant',
//     description: 'A cushion cut pendant that blends classic elegance with contemporary style.',
//     price: '2,200'
//   },
// ];


function Pendant() {
  const [visible, setVisible] = useState(6);
  const [searchQuery,setSearchQuert] = useState('')

  const handleSearch=(props)=>{
    setSearchQuert(props)
  }

  const filteredData = PendantData.PendantData.filter(item=>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
      {visible < PendantData.PendantData.length ? (
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

export default Pendant
