import SearchBar from '../Searchbar'
import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
import CardComponent from '../cardComponent';
import RingData from '../../hardData.json'

// const data = [
//   {
//     pic: 'https://via.placeholder.com/150/0000FF/808080?text=Ring1',
//     name: 'Elegant Diamond Ring',
//     description: 'A beautiful diamond ring with an elegant design, perfect for special occasions.',
//     price: '2,500'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Ring2',
//     name: 'Classic Gold Band',
//     description: 'A timeless gold band that symbolizes eternal love and commitment.',
//     price: '800'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/00FF00/000000?text=Ring3',
//     name: 'Platinum Engagement Ring',
//     description: 'A stunning platinum ring designed to celebrate your engagement.',
//     price: '3,000'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFFF00/000000?text=Ring4',
//     name: 'Sapphire Gemstone Ring',
//     description: 'An exquisite ring featuring a deep blue sapphire gemstone.',
//     price: '1,500'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/000000/FFFFFF?text=Ring5',
//     name: 'Rose Gold Ring',
//     description: 'A modern ring crafted from rose gold, offering a unique and stylish look.',
//     price: '1,200'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFFFFF/000000?text=Ring6',
//     name: 'Vintage Silver Ring',
//     description: 'A vintage-inspired silver ring with intricate detailing.',
//     price: '600'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Ring7',
//     name: 'Emerald Cut Ring',
//     description: 'A sophisticated ring with an emerald cut stone, perfect for making a statement.',
//     price: '4,000'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/00FFFF/000000?text=Ring8',
//     name: 'Pearl Ring',
//     description: 'A delicate ring featuring a lustrous pearl at its center.',
//     price: '900'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Ring9',
//     name: 'Ruby Ring',
//     description: 'A ring adorned with a vibrant ruby gemstone, symbolizing passion and love.',
//     price: '1,800'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/800080/FFFFFF?text=Ring10',
//     name: 'Halo Diamond Ring',
//     description: 'A dazzling halo ring with a center diamond surrounded by smaller diamonds.',
//     price: '3,500'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/008080/FFFFFF?text=Ring11',
//     name: 'Twisted Band Ring',
//     description: 'A unique ring with a twisted band design, adding a modern touch.',
//     price: '1,100'
//   },
//   {
//     pic: 'https://via.placeholder.com/150/FFC0CB/FFFFFF?text=Ring12',
//     name: 'Cushion Cut Ring',
//     description: 'A cushion cut ring that blends classic elegance with contemporary style.',
//     price: '2,200'
//   },
// ];



function Ring() {
  const [visible, setVisible] = useState(6);
  const [searchQuery,setSearchQuert] = useState('')

  const handleSearch=(props)=>{
    setSearchQuert(props)
  }

  const filteredData = RingData.RingData.filter(item=>
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
            id={item.id}
            />
          </Col>
        ))}
      </Row>
      {visible < RingData.RingData.length ? (
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

export default Ring
