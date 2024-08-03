import React, { useState } from 'react';
import SearchBar from '../Searchbar'

import { Button, Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import CardComponent from '../cardComponent';
import NecklaceData from '../../hardData.json'


// const data = [
//   {
//     pic: 'https://via.placeholder.com/150/0000FF/808080?text=Necklace1',
//     name: 'Elegant Diamond Necklace',
//     description: 'A beautiful diamond necklace with an elegant design, perfect for special occasions.',
//     price: '2,500'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Necklace2',
//     name: 'Classic Gold Necklace',
//     description: 'A timeless gold necklace that symbolizes eternal love and commitment.',
//     price: '800'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/00FF00/000000?text=Necklace3',
//     name: 'Platinum Necklace',
//     description: 'A stunning platinum necklace designed to celebrate your special moments.',
//     price: '3,000'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFFF00/000000?text=Necklace4',
//     name: 'Sapphire Gemstone Necklace',
//     description: 'An exquisite necklace featuring a deep blue sapphire gemstone.',
//     price: '1,500'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/000000/FFFFFF?text=Necklace5',
//     name: 'Rose Gold Necklace',
//     description: 'A modern necklace crafted from rose gold, offering a unique and stylish look.',
//     price: '1,200'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFFFFF/000000?text=Necklace6',
//     name: 'Vintage Silver Necklace',
//     description: 'A vintage-inspired silver necklace with intricate detailing.',
//     price: '600'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Necklace7',
//     name: 'Emerald Cut Necklace',
//     description: 'A sophisticated necklace with an emerald cut stone, perfect for making a statement.',
//     price: '4,000'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/00FFFF/000000?text=Necklace8',
//     name: 'Pearl Necklace',
//     description: 'A delicate necklace featuring a lustrous pearl at its center.',
//     price: '900'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Necklace9',
//     name: 'Ruby Necklace',
//     description: 'A necklace adorned with a vibrant ruby gemstone, symbolizing passion and love.',
//     price: '1,800'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/800080/FFFFFF?text=Necklace10',
//     name: 'Halo Diamond Necklace',
//     description: 'A dazzling halo necklace with a center diamond surrounded by smaller diamonds.',
//     price: '3,500'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/008080/FFFFFF?text=Necklace11',
//     name: 'Twisted Band Necklace',
//     description: 'A unique necklace with a twisted band design, adding a modern touch.',
//     price: '1,100'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Necklace12',
//     name: 'Cushion Cut Necklace',
//     description: 'A cushion cut necklace that blends classic elegance with contemporary style.',
//     price: '2,200'
//   },
// ];


function Necklace() {
  const [visible, setVisible] = useState(6);
  const [searchQuery,setSearchQuert] = useState('')



  const handleSearch=(props)=>{
    setSearchQuert(props)
  }

  const filteredData = NecklaceData.NecklaceData.filter(item=>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const showMore = () => {
    setVisible(visible+6);
  };

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
            id={item.id}
            />
          </Col>
        ))}
      </Row>
      {visible < NecklaceData.NecklaceData.length ? (
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

export default Necklace
