import React from 'react';
import {Carousel} from 'react-bootstrap'
import { data } from './CarouselData';

const Carousels = () => {
  return <div style={{width:'100%'}}>
    <Carousel>
  
  {data.map((item,index)=>(
  <Carousel.Item key={index} interval={1000} >
    <img
      className="d-block w-100"
      src={item.img}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>{item.title}</h3>
      <p>{item.model}</p>
    </Carousel.Caption>
  </Carousel.Item>
  ))}
</Carousel>
  </div>
};

export default Carousels;
